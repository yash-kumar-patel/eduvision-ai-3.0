import os
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

# Register Fonts
pdfmetrics.registerFont(TTFont('Gujarati', 'fonts/NotoSansGujarati-Regular.ttf'))
pdfmetrics.registerFont(TTFont('Gujarati-Bold', 'fonts/NotoSansGujarati-Bold.ttf'))

# Numbered Canvas for Footer & Header
class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_decorations(self, page_count):
        if self._pageNumber == 1:
            # Skip header/footer on cover page
            return
        
        self.saveState()
        self.setFont('Gujarati', 8)
        self.setFillColor(colors.HexColor('#64748b'))
        
        # Header
        self.drawString(40, 805, 'EduVision AI 3.0 — સાયન્સ ફેર પ્રોજેક્ટ ૨૦૨૬')
        self.drawRightString(555, 805, 'સંપૂર્ણ પ્રોજેક્ટ દસ્તાવેજીકરણ')
        self.setStrokeColor(colors.HexColor('#e2e8f0'))
        self.setLineWidth(0.5)
        self.line(40, 798, 555, 798)
        
        # Footer
        self.line(40, 45, 555, 45)
        self.drawString(40, 32, 'એમ. એમ. કરોડિયા પ્રાથમિક શાળા, તરસાડી કોસંબા (R.S)')
        page_text = f'પેજ {self._pageNumber} / {page_count}'
        self.drawRightString(555, 32, page_text)
        self.restoreState()

def build_pdf():
    pdf_path = "EduVision_AI_3_0_Project_Documentation.pdf"
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=A4,
        leftMargin=40,
        rightMargin=40,
        topMargin=50,
        bottomMargin=55
    )

    styles = getSampleStyleSheet()
    
    # Custom Palette
    COLOR_PRIMARY = colors.HexColor('#0f172a') # Slate 900
    COLOR_ACCENT = colors.HexColor('#2563eb')  # Blue 600
    COLOR_EMERALD = colors.HexColor('#059669') # Emerald 600
    COLOR_DARK = colors.HexColor('#1e293b')    # Slate 800
    COLOR_MUTED = colors.HexColor('#475569')   # Slate 600
    COLOR_BG_CARD = colors.HexColor('#f8fafc') # Slate 50
    COLOR_BORDER = colors.HexColor('#cbd5e1')  # Slate 300

    # Custom Typography Styles
    style_cover_badge = ParagraphStyle(
        'CoverBadge',
        fontName='Gujarati-Bold',
        fontSize=10,
        leading=14,
        alignment=1, # Center
        textColor=COLOR_ACCENT
    )

    style_cover_title = ParagraphStyle(
        'CoverTitle',
        fontName='Gujarati-Bold',
        fontSize=30,
        leading=38,
        alignment=1,
        textColor=COLOR_PRIMARY
    )

    style_cover_subtitle_gu = ParagraphStyle(
        'CoverSubtitleGu',
        fontName='Gujarati-Bold',
        fontSize=13,
        leading=18,
        alignment=1,
        textColor=COLOR_DARK
    )

    style_cover_subtitle_en = ParagraphStyle(
        'CoverSubtitleEn',
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        alignment=1,
        textColor=COLOR_MUTED
    )

    style_h1 = ParagraphStyle(
        'Heading1_Custom',
        fontName='Gujarati-Bold',
        fontSize=16,
        leading=22,
        textColor=COLOR_PRIMARY,
        spaceBefore=14,
        spaceAfter=6,
        keepWithNext=True
    )

    style_h2 = ParagraphStyle(
        'Heading2_Custom',
        fontName='Gujarati-Bold',
        fontSize=12,
        leading=16,
        textColor=COLOR_ACCENT,
        spaceBefore=10,
        spaceAfter=4,
        keepWithNext=True
    )

    style_body = ParagraphStyle(
        'Body_Custom',
        fontName='Gujarati',
        fontSize=9.5,
        leading=14.5,
        textColor=COLOR_DARK,
        spaceAfter=5
    )

    style_body_bold = ParagraphStyle(
        'Body_Bold_Custom',
        fontName='Gujarati-Bold',
        fontSize=9.5,
        leading=14.5,
        textColor=COLOR_PRIMARY
    )

    style_table_header = ParagraphStyle(
        'TableHeader',
        fontName='Gujarati-Bold',
        fontSize=9,
        leading=12,
        textColor=colors.white,
        alignment=1
    )

    style_table_cell = ParagraphStyle(
        'TableCell',
        fontName='Gujarati',
        fontSize=8.5,
        leading=11.5,
        textColor=COLOR_DARK
    )

    style_table_cell_bold = ParagraphStyle(
        'TableCellBold',
        fontName='Gujarati-Bold',
        fontSize=8.5,
        leading=11.5,
        textColor=COLOR_PRIMARY
    )

    story = []

    # =========================================================================
    # COVER PAGE
    # =========================================================================
    story.append(Spacer(1, 15))
    
    # Science Fair Badge
    badge_data = [[
        Paragraph('★ સાયન્સ ફેર પ્રોજેક્ટ ૨૦૨૬ (SCIENCE FAIR PROJECT 2026) ★', style_cover_badge)
    ]]
    badge_table = Table(badge_data, colWidths=[515])
    badge_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#eff6ff')),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#bfdbfe')),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
    ]))
    story.append(badge_table)
    story.append(Spacer(1, 15))

    # Main Titles
    story.append(Paragraph('EduVision AI 3.0', style_cover_title))
    story.append(Spacer(1, 6))
    story.append(Paragraph('AI આધારિત વિદ્યાર્થી પ્રદર્શન આગાહી અને બહુઆયામી કારકિર્દી માર્ગદર્શન પ્રણાલી', style_cover_subtitle_gu))
    story.append(Spacer(1, 4))
    story.append(Paragraph('Intelligent Academic Performance & Multimodal Career Guidance System', style_cover_subtitle_en))
    story.append(Spacer(1, 16))

    # Live Application & GitHub QR Codes Card
    qr_ver_path = 'assets/qr/qr_vercel.png'
    qr_git_path = 'assets/qr/qr_github.png'

    qr_ver_img = Image(qr_ver_path, width=1.3*inch, height=1.3*inch) if os.path.exists(qr_ver_path) else Paragraph('[QR]', style_body)
    qr_git_img = Image(qr_git_path, width=1.3*inch, height=1.3*inch) if os.path.exists(qr_git_path) else Paragraph('[QR]', style_body)

    qr_card_data = [
        [
            Paragraph('<b>🌐 લાઇવ એપ્લિકેશન (Live Web App)</b>', style_cover_badge),
            Paragraph('<b>💻 ગિટહબ રીપોઝીટરી (GitHub Code)</b>', style_cover_badge)
        ],
        [
            qr_ver_img,
            qr_git_img
        ],
        [
            Paragraph('<b>URL:</b> <font color="#2563eb"><u>https://eduvision-ai-3-0.vercel.app</u></font><br/><font size="7.5" color="#64748b">QR સ્કેન કરીને સીધા તમારા મોબાઇલમાં ખોલો</font>', ParagraphStyle('LinkP1', parent=style_body, alignment=1, fontSize=8, leading=10)),
            Paragraph('<b>URL:</b> <font color="#2563eb"><u>https://github.com/yash-kumar-patel/eduvision-ai-3.0</u></font><br/><font size="7.5" color="#64748b">સંપૂર્ણ સોર્સ કોડ અને ટેકનોલોજી જુઓ</font>', ParagraphStyle('LinkP2', parent=style_body, alignment=1, fontSize=8, leading=10))
        ]
    ]

    qr_table = Table(qr_card_data, colWidths=[250, 250])
    qr_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), COLOR_BG_CARD),
        ('BOX', (0, 0), (-1, -1), 1.2, COLOR_BORDER),
        ('INNERGRID', (0, 0), (-1, -1), 0.8, colors.HexColor('#e2e8f0')),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ]))
    story.append(qr_table)
    story.append(Spacer(1, 16))

    # Team & Institution Info Card
    team_data = [
        [
            Paragraph('<b>🏛️ સંસ્થા અને માર્ગદર્શક માહિતી (Institutional Details)</b>', ParagraphStyle('TeamH', parent=style_cover_badge, textColor=COLOR_PRIMARY, alignment=0)),
            Paragraph('<b>👨‍🔬 પ્રોજેક્ટ સંશોધક ટીમ (Student Innovators)</b>', ParagraphStyle('TeamH2', parent=style_cover_badge, textColor=COLOR_PRIMARY, alignment=0))
        ],
        [
            Paragraph(
                '<b>શાળા:</b> એમ. એમ. કરોડિયા પ્રાથમિક શાળા<br/>'
                '<b>સ્થળ:</b> તરસાડી કોસંબા (R.S)<br/>'
                '<b>માર્ગદર્શક શિક્ષક:</b> શ્રી મનોજભાઈ પરમાર<br/>'
                '<b>વિભાગ:</b> AI, Data Science & Educational Tech',
                style_body
            ),
            Paragraph(
                '<b>બાળવૈજ્ઞાનિક ૧:</b> કૃતાર્થ રોનક બારોટ<br/>'
                '<b>બાળવૈજ્ઞાનિક ૨:</b> અંશ કિરણભાઈ પ્રજાપતિ<br/>'
                '<b>પ્રોજેક્ટ મોડેલ:</b> Gradient Boosting Regressor<br/>'
                '<b>ચોકસાઈ દર:</b> ૮૧.૩૮% (R² Score) | MAE: ±૧.૧૮',
                style_body
            )
        ]
    ]

    team_table = Table(team_data, colWidths=[250, 250])
    team_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#ffffff')),
        ('BOX', (0, 0), (-1, -1), 1, COLOR_BORDER),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#f1f5f9')),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('LEFTPADDING', (0, 0), (-1, -1), 10),
        ('RIGHTPADDING', (0, 0), (-1, -1), 10),
    ]))
    story.append(team_table)

    story.append(PageBreak())

    # =========================================================================
    # PART 1: GUJARATI COMPLETE DOCUMENTATION
    # =========================================================================
    story.append(Paragraph('ભાગ ૧: સંપૂર્ણ ગુજરાતી પ્રોજેક્ટ અહેવાલ', style_h1))
    story.append(HRFlowable(width="100%", thickness=1.5, color=COLOR_ACCENT, spaceBefore=2, spaceAfter=8))

    story.append(Paragraph('૧. કૃતિનું નામ અને પરિચય', style_h2))
    story.append(Paragraph(
        '<b>EduVision AI 3.0</b> એ એક અત્યાધુનિક, દ્વિભાષી (ગુજરાતી અને અંગ્રેજી) વેબ-આધારિત શૈક્ષણિક ઇન્ટેલિજન્સ સિસ્ટમ છે. '
        'આ પ્લેટફોર્મ વિદ્યાર્થીના ૧૪ જેટલા મહત્વપૂર્ણ શૈક્ષણિક, વર્તણૂક અને જીવનશૈલી પરિબળોનું વિશ્લેષણ કરીને અંતિમ વાર્ષિક પરીક્ષાના ગુણની સચોટ આગાહી કરે છે, '
        'જોખમ સ્તર નક્કી કરે છે અને વ્યક્તિગત સુધારણા યોજના આપે છે. આવૃત્તિ 3.0 માં નવું <b>AI Career Guidance Engine</b> ઉમેરવામાં આવ્યું છે, '
        'જે વિદ્યાર્થીના રસ, કૌશલ્ય અને ૨૦૨૬+ ના આધુનિક પ્રવાહો મુજબ શ્રેષ્ઠ કારકિર્દી વિકલ્પો અને રોડમેપ સૂચવે છે.',
        style_body
    ))

    story.append(Paragraph('૨. પ્રોજેક્ટનો મુખ્ય હેતુ', style_h2))
    story.append(Paragraph(
        '• <b>વહેલી ઓળખ (Early Identification):</b> પરીક્ષાના મહિનાઓ પહેલાં નબળા અથવા જોખમ ધરાવતા વિદ્યાર્થીઓની ઓળખ કરવી જેથી સમયસર સુધારો થઈ શકે.<br/>'
        '• <b>આગાહી અને જોખમ વિશ્લેષણ:</b> Machine Learning દ્વારા સચોટ માર્ક્સ અને Performance Risk (High / Medium / Low) નું વિશ્લેષણ કરવું.<br/>'
        '• <b>વ્યક્તિગત માર્ગદર્શન:</b> સામાન્ય સલાહ આપવાને બદલે વિદ્યાર્થીના ચોક્કસ નબળા પરિબળ (જેમ કે અભ્યાસ સમય, ગેરહાજરી, પુનરાવર્તન) મુજબ ગુજરાતીમાં માર્ગદર્શન આપવું.<br/>'
        '• <b>કારકિર્દી દિશા નિર્ધારણ:</b> ધોરણ ૧૦ અને ૧૨ પછી કયો પ્રવાહ (Science, Commerce, Arts, AI/Robotics, વગેરે) પસંદ કરવો તેનું વિજ્ઞાન-આધારિત માર્ગદર્શન પૂરું પાડવું.',
        style_body
    ))

    story.append(Paragraph('૩. વૈજ્ઞાનિક સિદ્ધાંત', style_h2))
    story.append(Paragraph(
        'વિદ્યાર્થીનું શૈક્ષણિક પરિણામ માત્ર એક પરીક્ષાના દિવસનું પરિણામ નથી, પરંતુ તે તેના દૈનિક અભ્યાસ સમય, અગાઉની પરીક્ષાઓનો પાયો, શાળામાં હાજરી, કુટુંબ સહાય અને મનોવૈજ્ઞાનિક સ્વાસ્થ્ય જેવા બહુવિધ પરિબળોનું સંયુક્ત પરિણામ છે. '
        'જો આ ઐતિહાસિક સંબંધોને મશીન લર્નિંગ અલ્ગોરિધમ દ્વારા પ્રશિક્ષિત (train) કરવામાં આવે, તો તે આવનારી પરીક્ષાના પરિણામની ઉચ્ચ ચોકસાઈ સાથે આગાહી કરી શકે છે.',
        style_body
    ))

    story.append(Paragraph('૪. સાધનો (હાર્ડવેર અને સોફ્ટવેર)', style_h2))
    story.append(Paragraph(
        '• <b>હાર્ડવેર:</b> લેપટોપ/કમ્પ્યુટર (8GB+ RAM), ઇન્ટરનેટ જોડાણ, અને મોબાઇલ/ટેબ્લેટ ઉપકરણો.<br/>'
        '• <b>સોફ્ટવેર & ફ્રેમવર્ક્સ:</b> Python 3.10+, Next.js 14 (App Router), TypeScript, Tailwind CSS, Three.js (WebGL 3D Cosmos), Vercel Cloud Serverless.',
        style_body
    ))

    story.append(Paragraph('૫. પાયથોન લાઇબ્રેરીઓ અને ટૂલ્સ', style_h2))
    story.append(Paragraph(
        '• <b>Pandas & NumPy:</b> ડેટાસેટનું સંચાલન, ડેટાફ્રેમ હેન્ડલિંગ, અને બહુપરિમાણીય ગાણિતિક ગણતરીઓ માટે.<br/>'
        '• <b>Scikit-learn:</b> મોડેલ તાલીમ (Gradient Boosting Regressor), ડેટા પ્રીપ્રોસેસિંગ પાઇપલાઇન્સ, StandardScaler અને OneHotEncoder.<br/>'
        '• <b>Three.js:</b> ઇન્ટરેક્ટિવ 3D કોસ્મોસ સ્પેસ પાર્ટિકલ બેકગ્રાઉન્ડ એનિમેશન માટે.<br/>'
        '• <b>Canvas-Confetti:</b> પરિણામ સફળતાપૂર્વક અનલોક થવા પર વિઝ્યુઅલ ફીડબેક માટે.',
        style_body
    ))

    story.append(Paragraph('૬. ડેટાસેટ સમૂહ (Dataset Information)', style_h2))
    story.append(Paragraph(
        '• <b>સ્ત્રોત:</b> યુસીઆઈ મશીન લર્નિંગ રિપોઝિટરી (UCI Machine Learning Repository)<br/>'
        '• <b>સ્ત્રોત લિંક:</b> https://archive.ics.uci.edu/dataset/320/student+performance<br/>'
        '• <b>ડેટાસેટ વર્ણન:</b> ૩૯૫ વિદ્યાર્થીઓના વાસ્તવિક શૈક્ષણિક રેકોર્ડ્સ, જેમાં અગાઉના ગુણ (G1, G2), અભ્યાસ સમય, ગેરહાજરી, કૌટુંબિક સહાય અને આરોગ્ય જેવા પરિબળો સમાવિષ્ટ છે.',
        style_body
    ))

    # Feature List Table
    feat_data = [
        [Paragraph('<b>લક્ષણ (Feature)</b>', style_table_header), Paragraph('<b>વર્ણન</b>', style_table_header), Paragraph('<b>મહત્વ (%)</b>', style_table_header)],
        [Paragraph('G2 (બીજી પરીક્ષા ગુણ)', style_table_cell_bold), Paragraph('વાર્ષિક પરીક્ષા પહેલાંનો મુખ્ય શૈક્ષણિક સ્કોર (૦-૨૦)', style_table_cell), Paragraph('<b>૮૦.૫૩%</b>', style_table_cell_bold)],
        [Paragraph('Absences (ગેરહાજરી)', style_table_cell_bold), Paragraph('સત્ર દરમિયાન શાળામાં ગેરહાજર દિવસોની સંખ્યા', style_table_cell), Paragraph('<b>૧૪.૧૭%</b>', style_table_cell_bold)],
        [Paragraph('G1 (પ્રથમ પરીક્ષા ગુણ)', style_table_cell_bold), Paragraph('સત્રની શરૂઆતનો શૈક્ષણિક પાયો (૦-૨૦)', style_table_cell), Paragraph('<b>૧.૬૪%</b>', style_table_cell_bold)],
        [Paragraph('Study Time (અભ્યાસ સમય)', style_table_cell_bold), Paragraph('શાળા બાદ દૈનિક સ્વ-અભ્યાસના કલાકો', style_table_cell), Paragraph('૧.૫૨%', style_table_cell)],
        [Paragraph('School/Family Support', style_table_cell_bold), Paragraph('શાળા અથવા પરિવાર તરફથી વિશેષ શૈક્ષણિક સહાય', style_table_cell), Paragraph('૧.૧૪%', style_table_cell)],
        [Paragraph('Health & Extra Activities', style_table_cell_bold), Paragraph('શારીરિક સ્વાસ્થ્ય, બહાર જવાનો સમય અને નવરાશ', style_table_cell), Paragraph('૧.૦૦%', style_table_cell)],
    ]
    feat_table = Table(feat_data, colWidths=[140, 280, 95])
    feat_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), COLOR_PRIMARY),
        ('GRID', (0, 0), (-1, -1), 0.5, COLOR_BORDER),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, COLOR_BG_CARD]),
        ('ALIGN', (2, 0), (2, -1), 'CENTER'),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(feat_table)
    story.append(Spacer(1, 8))

    story.append(PageBreak())

    # Page 3: Methodology & Model Evaluation
    story.append(Paragraph('૭. સંપૂર્ણ સિસ્ટમ રચના અને કાર્યપદ્ધતિ', style_h2))
    story.append(Paragraph(
        'EduVision AI પ્રોજેક્ટની કાર્યપદ્ધતિ એક સુવ્યવસ્થિત Machine Learning પ્રક્રિયા પર આધારિત છે:<br/>'
        '૧. <b>ડેટા સંગ્રહ & સફાઈ:</b> UCI રિપોઝિટરીમાંથી ડેટા મેળવી શુદ્ધિકરણ કરવામાં આવ્યું.<br/>'
        '૨. <b>સંશોધનાત્મક વિશ્લેષણ (EDA):</b> વિવિધ પરિબળો વચ્ચેનો સંબંધ અને વિતરણ તપાસવામાં આવ્યું.<br/>'
        '૩. <b>લક્ષણ એન્જિનિયરિંગ:</b> OneHotEncoder અને StandardScaler નો સમાવેશ કરતી પાઇપલાઇન તૈયાર કરવામાં આવી.<br/>'
        '૪. <b>તાલીમ & પરીક્ષણ વિભાજન:</b> ૮૦% તાલીમ ડેટા અને ૨૦% પરીક્ષણ ડેટા.<br/>'
        '૫. <b>મોડેલ તાલીમ & મૂલ્યાંકન:</b> Linear Regression, Random Forest અને Gradient Boosting ની તુલના કરવામાં આવી.',
        style_body
    ))

    story.append(Paragraph('૮. મોડેલ પસંદગી અને ચોકસાઈનું મૂલ્યાંકન', style_h2))
    
    # Model Comparison Table
    model_data = [
        [Paragraph('<b>અલ્ગોરિધમ (Model)</b>', style_table_header), Paragraph('<b>MAE (સરેરાશ ભૂલ)</b>', style_table_header), Paragraph('<b>R² Score (ચોકસાઈ)</b>', style_table_header), Paragraph('<b>પરિણામ / સ્થિતિ</b>', style_table_header)],
        [Paragraph('Linear Regression', style_table_cell), Paragraph('૧.૪૪૨૯ માર્ક્સ', style_table_cell), Paragraph('૦.૭૬૯૦ (૭૬.૯%)', style_table_cell), Paragraph('નકારવામાં આવ્યું', style_table_cell)],
        [Paragraph('Random Forest Regressor', style_table_cell), Paragraph('૧.૨૦૬૧ માર્ક્સ', style_table_cell), Paragraph('૦.૮૧૩૨ (૮૧.૩૨%)', style_table_cell), Paragraph('સારો વિકલ્પ', style_table_cell)],
        [Paragraph('<b>Gradient Boosting Regressor</b>', style_table_cell_bold), Paragraph('<b>± ૧.૧૮૦૪ માર્ક્સ</b>', style_table_cell_bold), Paragraph('<b>૦.૮૧૩૮ (૮૧.૩૮%)</b>', style_table_cell_bold), Paragraph('<b>શ્રેષ્ઠ પસંદગી (Final)</b>', style_table_cell_bold)],
    ]
    model_table = Table(model_data, colWidths=[150, 110, 120, 135])
    model_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), COLOR_ACCENT),
        ('BACKGROUND', (0, 3), (-1, 3), colors.HexColor('#dcfce7')),
        ('GRID', (0, 0), (-1, -1), 0.5, COLOR_BORDER),
        ('ALIGN', (1, 0), (-1, -1), 'CENTER'),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
    ]))
    story.append(model_table)
    story.append(Spacer(1, 8))

    story.append(Paragraph(
        '💡 <b>શા માટે Gradient Boosting Regressor પસંદ કરવામાં આવ્યું?</b><br/>'
        'ગ્રેડિયન્ટ બૂસ્ટિંગ સતત પોતાની અગાઉની ભૂલોમાંથી શીખીને નવી Decision Trees નું નિર્માણ કરે છે. '
        'આનાથી જટિલ અને અરેખીય શૈક્ષણિક ડેટા પર સૌથી ઓછી ભૂલ (MAE ૧.૧૮) અને સર્વોચ્ચ ચોકસાઈ (૮૧.૩૮%) પ્રાપ્ત થાય છે.',
        style_body
    ))

    story.append(Paragraph('૯. EduVision AI 3.0 ના ડ્યુઅલ એન્જિન (મુખ્ય વિશેષતાઓ)', style_h2))
    story.append(Paragraph(
        '• <b>🎯 Engine 1: Academic Performance AI:</b> ૧૪ પરિબળો પરથી સંભવિત ગુણ, જોખમ સ્તર (Low / Medium / High), પરિબળોનું વિશ્લેષણ અને ડાઉનલોડ કરી શકાય તેવું સત્તાવાર પ્રદર્શન પ્રમાણપત્ર.<br/>'
        '• <b>🧭 Engine 2: Multimodal AI Career Guidance:</b> વિદ્યાર્થીના રસ, કૌશલ્ય, અને વર્તમાન ટ્રેન્ડ્સ મુજબ ૧૦/૧૨ પછીના શ્રેષ્ઠ પ્રવાહો (Science, Commerce, Arts, AI/CS) અને આધુનિક કારકિર્દી રોડમેપ.<br/>'
        '• <b>🌌 Seamless 3D Space Cosmos UI:</b> Three.js આધારિત આધુનિક બ્લેક એન્ડ વ્હાઇટ થીમ જે અદભુત વિઝ્યુઅલ અનુભવ પૂરો પાડે છે.',
        style_body
    ))

    story.append(Paragraph('૧૦. શિક્ષણ ક્ષેત્રમાં ઉપયોગ અને ફાયદા', style_h2))
    story.append(Paragraph(
        '• <b>વિદ્યાર્થીઓ માટે:</b> પોતાની નબળાઈઓની વહેલી ઓળખ, તણાવમુક્તિ અને આત્મવિશ્વાસમાં વધારો.<br/>'
        '• <b>શિક્ષકો માટે:</b> વર્ગખંડમાં નબળા વિદ્યાર્થીઓનું સરળ વિશ્લેષણ અને સમયસર વ્યક્તિગત ધ્યાન.<br/>'
        '• <b>વાલીઓ માટે:</b> બાળકની પ્રગતિ વિશે સચોટ અને પારદર્શક માહિતી.<br/>'
        '• <b>શાળાઓ માટે:</b> શૈક્ષણિક પરિણામો અને પાસિંગ રેશિયોમાં નોંધપાત્ર સુધારો.',
        style_body
    ))

    story.append(Paragraph('૧૧. ભવિષ્યની યોજના (Future Scope)', style_h2))
    story.append(Paragraph(
        '૧. <b>School ERP Integration:</b> શાળાના હાજરી અને પરીક્ષા સોફ્ટવેર સાથે ડાયરેક્ટ API કનેક્શન.<br/>'
        '૨. <b>NLP સેન્ટિમેન્ટ એનાલિસિસ:</b> વિદ્યાર્થીના લખાણ પરથી માનસિક તણાવ કે ચિંતા ઓળખવી.<br/>'
        '૩. <b>વાલીઓ માટે મોબાઇલ એપ:</b> રીઅલ-ટાઇમ એલર્ટ્સ અને માસિક પ્રગતિ સૂચકાંકો.<br/>'
        '૪. <b>ગુજરાતી AI વોઇસ સહાયક:</b> વિદ્યાર્થીઓ પોતાની માતૃભાષામાં બોલીને સલાહ મેળવી શકે.',
        style_body
    ))

    story.append(PageBreak())

    # =========================================================================
    # PART 2: ENGLISH TECHNICAL DOCUMENTATION
    # =========================================================================
    story.append(Paragraph('Part 2: Complete English Technical Documentation', style_h1))
    story.append(HRFlowable(width="100%", thickness=1.5, color=COLOR_ACCENT, spaceBefore=2, spaceAfter=8))

    story.append(Paragraph('1. Project Abstract & Architecture Overview', style_h2))
    story.append(Paragraph(
        '<b>EduVision AI 3.0</b> is a dual-core educational intelligence platform built to bridge predictive student behavioral modeling with actionable, modern career forecasting. '
        'Developed for the <b>Science Fair 2026</b>, it provides high-precision academic grade estimation (81.38% R² Score) and personalized guidance in Gujarati and English.',
        style_body
    ))

    story.append(Paragraph('2. Mathematical & Algorithmic Formulation', style_h2))
    story.append(Paragraph(
        'The primary regression objective models the final term score <i>G3</i> on a 20-point scale as a function of 14 core multidimensional features:<br/>'
        '<b>ŷ<sub>G3</sub> = f<sub>M</sub>(G<sub>1</sub>, G<sub>2</sub>, studytime, absences, failures, schoolsup, famsup, health, ...)</b><br/>'
        'Gradient Boosting constructs an additive ensemble of decision tree base learners <i>h<sub>m</sub>(x)</i> by minimizing Mean Squared Error (MSE) via gradient descent in function space.',
        style_body
    ))

    story.append(Paragraph('3. Machine Learning Benchmark Matrix', style_h2))
    
    eng_model_data = [
        [Paragraph('<b>Algorithm Evaluated</b>', style_table_header), Paragraph('<b>R² Score (Accuracy)</b>', style_table_header), Paragraph('<b>MAE (Margin of Error)</b>', style_table_header), Paragraph('<b>Status</b>', style_table_header)],
        [Paragraph('Linear Regression', style_table_cell), Paragraph('0.7690 (76.90%)', style_table_cell), Paragraph('± 1.4429 marks', style_table_cell), Paragraph('Rejected (Underfitting non-linear patterns)', style_table_cell)],
        [Paragraph('Random Forest Regressor', style_table_cell), Paragraph('0.8132 (81.32%)', style_table_cell), Paragraph('± 1.2061 marks', style_table_cell), Paragraph('Strong Candidate', style_table_cell)],
        [Paragraph('<b>Gradient Boosting Regressor</b>', style_table_cell_bold), Paragraph('<b>0.8138 (81.38%)</b>', style_table_cell_bold), Paragraph('<b>± 1.1804 marks</b>', style_table_cell_bold), Paragraph('<b>Selected Production Engine</b>', style_table_cell_bold)],
    ]
    eng_table = Table(eng_model_data, colWidths=[140, 110, 120, 145])
    eng_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), COLOR_PRIMARY),
        ('BACKGROUND', (0, 3), (-1, 3), colors.HexColor('#dcfce7')),
        ('GRID', (0, 0), (-1, -1), 0.5, COLOR_BORDER),
        ('ALIGN', (1, 0), (-1, -1), 'CENTER'),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(eng_table)
    story.append(Spacer(1, 8))

    story.append(Paragraph('4. Dual-Core AI Architecture (Version 3.0)', style_h2))
    story.append(Paragraph(
        '• <b>🎯 Engine 1 — Student Academic Predictor:</b> Evaluates 14 behavioral variables, computes predicted scores on a 20-point scale, determines risk tiers (Low / Medium / High), generates targeted study interventions, and exports high-contrast official printable certificates.<br/>'
        '• <b>🧭 Engine 2 — Multimodal Career Guidance Engine:</b> Maps student strengths and interests against emerging 2026+ career trends (AI Engineering, Space Robotics, Cybersecurity, Green Tech, Medical Sciences, and UI/UX Design), providing 10th/12th stream selection roadmaps and top college pathways.<br/>'
        '• <b>🌌 Seamless 3D WebGL Space Visuals:</b> Integrated Three.js particle starfield background delivering an immersive dark cyberpunk aesthetic across all screens.',
        style_body
    ))

    story.append(Paragraph('5. Stakeholder Impact & Institutional Benefits', style_h2))
    story.append(Paragraph(
        '• <b>Students:</b> Gain transparent self-awareness, reduced test anxiety, and structured academic study habits.<br/>'
        '• <b>Teachers:</b> Rapid automated identification of struggling students and reduction in diagnostic overhead.<br/>'
        '• <b>Parents:</b> Objective insight into learning progress and personalized support directions at home.<br/>'
        '• <b>Schools:</b> Improved institutional pass percentages, higher retention rates, and data-driven administrative planning.',
        style_body
    ))

    story.append(Paragraph('6. Institutional & Innovator Credits', style_h2))
    story.append(Paragraph(
        '• <b>Institution:</b> M. M. Karodia Primary School, Tarsadi Kosamba (R.S)<br/>'
        '• <b>Student Scientists:</b> Krutharth Ronak Barot & Ansh Kiranbhai Prajapati<br/>'
        '• <b>Project Mentor:</b> Shri Manojbhai Parmar<br/>'
        '• <b>Live Application:</b> <font color="#2563eb"><u>https://eduvision-ai-3-0.vercel.app</u></font><br/>'
        '• <b>GitHub Repository:</b> <font color="#2563eb"><u>https://github.com/yash-kumar-patel/eduvision-ai-3.0</u></font>',
        style_body
    ))

    # Build document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Documentation PDF generated successfully at: {pdf_path}")

if __name__ == "__main__":
    build_pdf()
