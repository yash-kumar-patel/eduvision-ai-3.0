import os
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image, HRFlowable
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# Register Fonts
pdfmetrics.registerFont(TTFont('Gujarati', 'fonts/NotoSansGujarati-Regular.ttf'))
pdfmetrics.registerFont(TTFont('Gujarati-Bold', 'fonts/NotoSansGujarati-Bold.ttf'))

def build_banner():
    # 48 inches wide by 36 inches tall (Standard Science Fair Flex Banner Size)
    width = 48 * inch
    height = 36 * inch
    pdf_path = "EduVision_AI_3_0_Science_Fair_Banner_48x36.pdf"

    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=(width, height),
        leftMargin=0.8 * inch,
        rightMargin=0.8 * inch,
        topMargin=0.8 * inch,
        bottomMargin=0.8 * inch
    )

    # Color Palette - Professional Exhibition Theme
    NAVY_DEEP = colors.HexColor('#090d16')
    CARD_BG = colors.HexColor('#f8fafc')
    CARD_BORDER = colors.HexColor('#cbd5e1')
    ACCENT_BLUE = colors.HexColor('#1d4ed8')
    ACCENT_CYAN = colors.HexColor('#0284c7')
    ACCENT_GREEN = colors.HexColor('#059669')
    TEXT_DARK = colors.HexColor('#0f172a')
    TEXT_MUTED = colors.HexColor('#475569')

    # Typography Styles for Large Banner
    style_school_header = ParagraphStyle(
        'SchoolHeader',
        fontName='Gujarati-Bold',
        fontSize=26,
        leading=32,
        alignment=1,
        textColor=colors.HexColor('#38bdf8')
    )

    style_event_tag = ParagraphStyle(
        'EventTag',
        fontName='Gujarati-Bold',
        fontSize=20,
        leading=26,
        alignment=1,
        textColor=colors.HexColor('#fde047')
    )

    style_main_title = ParagraphStyle(
        'MainTitle',
        fontName='Gujarati-Bold',
        fontSize=54,
        leading=64,
        alignment=1,
        textColor=colors.white
    )

    style_subtitle = ParagraphStyle(
        'Subtitle',
        fontName='Gujarati-Bold',
        fontSize=24,
        leading=32,
        alignment=1,
        textColor=colors.HexColor('#e2e8f0')
    )

    style_section_heading = ParagraphStyle(
        'SectionHeading',
        fontName='Gujarati-Bold',
        fontSize=20,
        leading=26,
        textColor=colors.HexColor('#1e3a8a'),
        spaceBefore=0,
        spaceAfter=6
    )

    style_card_title = ParagraphStyle(
        'CardTitle',
        fontName='Gujarati-Bold',
        fontSize=16,
        leading=22,
        textColor=ACCENT_BLUE,
        spaceBefore=4,
        spaceAfter=4
    )

    style_body = ParagraphStyle(
        'BannerBody',
        fontName='Gujarati',
        fontSize=14,
        leading=20,
        textColor=TEXT_DARK,
        spaceAfter=6
    )

    style_body_bold = ParagraphStyle(
        'BannerBodyBold',
        fontName='Gujarati-Bold',
        fontSize=14,
        leading=20,
        textColor=TEXT_DARK
    )

    style_metric_num = ParagraphStyle(
        'MetricNum',
        fontName='Gujarati-Bold',
        fontSize=32,
        leading=38,
        alignment=1,
        textColor=ACCENT_BLUE
    )

    style_metric_label = ParagraphStyle(
        'MetricLabel',
        fontName='Gujarati-Bold',
        fontSize=14,
        leading=18,
        alignment=1,
        textColor=TEXT_MUTED
    )

    style_footer_text = ParagraphStyle(
        'FooterText',
        fontName='Gujarati-Bold',
        fontSize=18,
        leading=24,
        alignment=1,
        textColor=colors.white
    )

    story = []

    # =========================================================================
    # 1. TOP HEADER BANNER (Full Width)
    # =========================================================================
    header_content = [
        [Paragraph('🏛️ એમ. એમ. કરોડિયા પ્રાથમિક શાળા, તરસાડી કોસંબા (R.S)', style_school_header)],
        [Paragraph('★ સાયન્સ ફેર ૨૦૨૬ (SCIENCE FAIR 2026) | વિભાગ: AI અને એજ્યુકેશનલ ટેકનોલોજી ★', style_event_tag)],
        [Spacer(1, 4)],
        [Paragraph('EduVision AI 3.0', style_main_title)],
        [Paragraph('AI આધારિત વિદ્યાર્થી પ્રદર્શન આગાહી અને બહુઆયામી કારકિર્દી માર્ગદર્શન પ્રણાલી', style_subtitle)],
        [Spacer(1, 6)]
    ]
    header_table = Table(header_content, colWidths=[46.4 * inch])
    header_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), NAVY_DEEP),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('BOX', (0, 0), (-1, -1), 3, colors.HexColor('#38bdf8')),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 14))

    # =========================================================================
    # 2. MAIN 3-COLUMN EXHIBITION GRID
    # =========================================================================
    
    # -------------------------------------------------------------------------
    # LEFT COLUMN: Objectives, Principle, Dataset, Stack
    # -------------------------------------------------------------------------
    left_flow = []
    
    # Card 1: Purpose & Objectives
    left_flow.append(Paragraph('📌 ૧. કૃતિનો હેતુ અને વિઝન', style_section_heading))
    left_flow.append(Paragraph(
        '• <b>વહેલી ઓળખ:</b> પરીક્ષાના મહિનાઓ પહેલાં નબળા વિદ્યાર્થીઓની સચોટ ઓળખ કરવી.<br/>'
        '• <b>જોખમ વિશ્લેષણ:</b> Machine Learning દ્વારા વિદ્યાર્થીના Performance Risk (High/Medium/Low) નું વિશ્લેષણ.<br/>'
        '• <b>વ્યક્તિગત માર્ગદર્શન:</b> દરેક વિદ્યાર્થીની નબળાઈ અનુસાર ચોક્કસ ગુજરાતી અભ્યાસ આયોજન પૂરું પાડવું.<br/>'
        '• <b>કારકિર્દી દિશા:</b> ૧૦/૧૨ પછી યોગ્ય શૈક્ષણિક પ્રવાહ અને ભવિષ્યલક્ષી ક્ષેત્રની પસંદગી.',
        style_body
    ))
    left_flow.append(Spacer(1, 10))

    # Card 2: Scientific Principle
    left_flow.append(Paragraph('🔬 ૨. વૈજ્ઞાનિક સિદ્ધાંત', style_section_heading))
    left_flow.append(Paragraph(
        'વિદ્યાર્થીનું અંતિમ પરિણામ માત્ર એક પરીક્ષાના દિવસનું પરિણામ નથી, પરંતુ તે તેના <b>દૈનિક અભ્યાસ સમય, અગાઉના ગુણ, હાજરી, કૌટુંબિક સહાય અને આરોગ્ય</b> જેવા પરિબળોનું બહુપરિમાણીય પરિણામ છે. '
        'આ સંબંધોને મશીન લર્નિંગ અલ્ગોરિધમ દ્વારા તાલીમ આપીને ભવિષ્યની સચોટ આગાહી શક્ય બને છે.',
        style_body
    ))
    left_flow.append(Spacer(1, 10))

    # Card 3: Dataset Information
    left_flow.append(Paragraph('📊 ૩. ડેટાસેટ સમૂહ (UCI Repository)', style_section_heading))
    left_flow.append(Paragraph(
        '• <b>સ્ત્રોત:</b> UCI Machine Learning Repository (Student Performance Dataset)<br/>'
        '• <b>વિદ્યાર્થી રેકોર્ડ્સ:</b> ૩૯૫ વિદ્યાર્થીઓનો વાસ્તવિક શૈક્ષણિક ડેટા<br/>'
        '• <b>૧૪ મુખ્ય લક્ષણો:</b> G1, G2 ગુણ, દૈનિક અભ્યાસ કલાકો, ગેરહાજરી, અગાઉની નિષ્ફળતાઓ, શાળા/કૌટુંબિક સહાય, ઈન્ટરનેટ સુવિધા, આરોગ્ય અને નવરાશ સમય.',
        style_body
    ))
    left_flow.append(Spacer(1, 10))

    # Card 4: Tools & Stack
    left_flow.append(Paragraph('🛠️ ૪. ટેકનોલોજી સ્ટેક', style_section_heading))
    left_flow.append(Paragraph(
        '• <b>Python & Scikit-learn:</b> મોડેલ તાલીમ, ડેટા પ્રીપ્રોસેસિંગ અને ગાણિતિક પાઇપલાઇન્સ.<br/>'
        '• <b>Next.js 14 & TypeScript:</b> સર્વરલેસ વેબ આર્કિટેક્ચર અને બહુભાષીય UI.<br/>'
        '• <b>Three.js (WebGL):</b> ૩D સ્પેસ કોસ્મોસ ઇન્ટરેક્ટિવ વિઝ્યુઅલ થીમ.<br/>'
        '• <b>Vercel Edge Cloud:</b> હાઇ-સ્પીડ ગ્લોબલ ડિપ્લોયમેન્ટ.',
        style_body
    ))

    # -------------------------------------------------------------------------
    # MIDDLE COLUMN: System Architecture, Model Selection, Feature Importance, Dual Engine
    # -------------------------------------------------------------------------
    mid_flow = []

    mid_flow.append(Paragraph('🧠 ૫. મોડેલ પસંદગી અને પરિણામો', style_section_heading))
    
    # Model Comparison Mini-Table
    m_data = [
        [Paragraph('<b>અલ્ગોરિધમ (Model)</b>', ParagraphStyle('MH', parent=style_body_bold, textColor=colors.white, alignment=1)), 
         Paragraph('<b>ચોકસાઈ (R² Score)</b>', ParagraphStyle('MH2', parent=style_body_bold, textColor=colors.white, alignment=1)), 
         Paragraph('<b>ભૂલ (MAE)</b>', ParagraphStyle('MH3', parent=style_body_bold, textColor=colors.white, alignment=1))],
        [Paragraph('Linear Regression', style_body), Paragraph('૭૬.૯૦%', style_body), Paragraph('± ૧.૪૪ માર્ક્સ', style_body)],
        [Paragraph('Random Forest Regressor', style_body), Paragraph('૮૧.૩૨%', style_body), Paragraph('± ૧.૨૦ માર્ક્સ', style_body)],
        [Paragraph('<b>Gradient Boosting (Final)</b>', style_body_bold), Paragraph('<b>૮૧.૩૮%</b>', style_body_bold), Paragraph('<b>± ૧.૧૮ માર્ક્સ</b>', style_body_bold)],
    ]
    m_table = Table(m_data, colWidths=[5.2 * inch, 4.4 * inch, 4.4 * inch])
    m_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), ACCENT_BLUE),
        ('BACKGROUND', (0, 3), (-1, 3), colors.HexColor('#dcfce7')),
        ('GRID', (0, 0), (-1, -1), 1, CARD_BORDER),
        ('ALIGN', (1, 0), (-1, -1), 'CENTER'),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
    ]))
    mid_flow.append(m_table)
    mid_flow.append(Spacer(1, 10))

    # Metric Highlights Grid
    metric_cards = [
        [
            Paragraph('૮૧.૩૮%', style_metric_num),
            Paragraph('± ૧.૧૮', style_metric_num),
            Paragraph('૩૯૫', style_metric_num)
        ],
        [
            Paragraph('મોડેલ સચોટતા દર (R²)', style_metric_label),
            Paragraph('સરેરાશ માર્જિન ઓફ એરર', style_metric_label),
            Paragraph('ચકાસાયેલ વિદ્યાર્થી ડેટા', style_metric_label)
        ]
    ]
    metric_table = Table(metric_cards, colWidths=[4.6 * inch, 4.6 * inch, 4.6 * inch])
    metric_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#eff6ff')),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#bfdbfe')),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#dbeafe')),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
    ]))
    mid_flow.append(metric_table)
    mid_flow.append(Spacer(1, 10))

    mid_flow.append(Paragraph('📈 ૬. પરિબળોનું પ્રભાવ વિશ્લેષણ (Feature Importance)', style_section_heading))
    mid_flow.append(Paragraph(
        '• <b>G2 (દ્વિતીય પરીક્ષાના ગુણ): ૮૦.૫૩%</b> — વિદ્યાર્થીની પ્રગતિનો મુખ્ય આધારસ્તંભ.<br/>'
        '• <b>Absences (શાળા ગેરહાજરી): ૧૪.૧૭%</b> — ગેરહાજરી વધવાથી પરિણામમાં ઝડપી ઘટાડો.<br/>'
        '• <b>G1 (પ્રથમ પરીક્ષાના ગુણ): ૧.૬૪%</b> — શૈક્ષણિક પાયાનું સૂચક.<br/>'
        '• <b>અભ્યાસ સમય, પરિવાર સહાય & સ્વાસ્થ્ય: ૩.૬૬%</b> — દૈનિક જીવનશૈલી પરિબળો.',
        style_body
    ))
    mid_flow.append(Spacer(1, 10))

    mid_flow.append(Paragraph('⚡ ૭. EduVision AI 3.0 ના ડ્યુઅલ એન્જિન', style_section_heading))
    mid_flow.append(Paragraph(
        '<b>૧. Performance AI Engine:</b> વાર્ષિક માર્ક્સ આગાહી, જોખમ વર્ગીકરણ (Low/Medium/High), પરિબળોનું વિશ્લેષણ અને પ્રિન્ટ કરી શકાય તેવું સત્તાવાર પ્રદર્શન પ્રમાણપત્ર.<br/>'
        '<b>૨. Multimodal Career Guidance Engine:</b> રસ-કૌશલ્ય મેચિંગ, ૧૦/૧૨ પ્રવાહ પસંદગી (Science, Commerce, Arts, IT/AI), ૨૦૨૬+ આધુનિક પ્રવાહો (AI, Robotics, Space Science, UI/UX) અને સંસ્થાઓનો રોડમેપ.',
        style_body
    ))

    # -------------------------------------------------------------------------
    # RIGHT COLUMN: Benefits, Impact, Future Scope, Live QR Codes
    # -------------------------------------------------------------------------
    right_flow = []

    right_flow.append(Paragraph('🌟 ૮. શિક્ષણ ક્ષેત્રમાં ઉપયોગ અને ફાયદા', style_section_heading))
    right_flow.append(Paragraph(
        '• <b>વિદ્યાર્થીઓ:</b> પોતાની નબળાઈઓની વહેલી ઓળખ, પરીક્ષાના તણાવમાં ઘટાડો અને સાચી કારકિર્દી પસંદગી.<br/>'
        '• <b>શિક્ષકો:</b> નબળા વિદ્યાર્થીઓ પર સમયસર વ્યક્તિગત ધ્યાન અને ડેટા-આધારિત વર્ગખંડ આયોજન.<br/>'
        '• <b>વાલીઓ:</b> બાળકના શૈક્ષણિક વિકાસની સચોટ અને પારદર્શક માહિતી.<br/>'
        '• <b>શાળાઓ:</b> સંસ્થાના પરિણામો અને પાસિંગ રેશિયોમાં નોંધપાત્ર સુધારો.',
        style_body
    ))
    right_flow.append(Spacer(1, 10))

    right_flow.append(Paragraph('🚀 ૯. ભવિષ્યની યોજના (Future Scope)', style_section_heading))
    right_flow.append(Paragraph(
        '• <b>School ERP Integration:</b> શાળાના હાજરી અને ગુણ સોફ્ટવેર સાથે ડાયરેક્ટ API કનેક્શન.<br/>'
        '• <b>NLP Sentiment Analysis:</b> વિદ્યાર્થીના લખાણ પરથી માનસિક તણાવ કે મુશ્કેલી ઓળખવી.<br/>'
        '• <b>મોબાઇલ એપ્લિકેશન:</b> વાલીઓ અને શિક્ષકો માટે સમર્પિત Android/iOS એપ.<br/>'
        '• <b>ગુજરાતી Voice Assistant:</b> વિદ્યાર્થીઓ બોલીને AI સાથે વાતચીત કરી શકે.',
        style_body
    ))
    right_flow.append(Spacer(1, 10))

    # QR Codes Card in Right Column
    qr_ver_path = 'assets/qr/qr_vercel.png'
    qr_git_path = 'assets/qr/qr_github.png'
    qr_ver_img = Image(qr_ver_path, width=1.6*inch, height=1.6*inch) if os.path.exists(qr_ver_path) else Paragraph('[QR]', style_body)
    qr_git_img = Image(qr_git_path, width=1.6*inch, height=1.6*inch) if os.path.exists(qr_git_path) else Paragraph('[QR]', style_body)

    qr_block = [
        [
            Paragraph('<b>🌐 લાઇવ એપ્લિકેશન</b>', ParagraphStyle('QRT1', parent=style_card_title, alignment=1)),
            Paragraph('<b>💻 સોર્સ કોડ (GitHub)</b>', ParagraphStyle('QRT2', parent=style_card_title, alignment=1))
        ],
        [
            qr_ver_img,
            qr_git_img
        ],
        [
            Paragraph('<b>https://eduvision-ai-3-0.vercel.app</b><br/><font color="#64748b" size="10">સ્કેન કરીને લાઇવ ડેમો જુઓ</font>', ParagraphStyle('QRL1', parent=style_body, alignment=1, fontSize=11, leading=14)),
            Paragraph('<b>https://github.com/yash-kumar-patel/eduvision-ai-3.0</b><br/><font color="#64748b" size="10">સંપૂર્ણ કોડ અને ડોક્યુમેન્ટેશન</font>', ParagraphStyle('QRL2', parent=style_body, alignment=1, fontSize=11, leading=14))
        ]
    ]
    qr_table = Table(qr_block, colWidths=[7.0 * inch, 7.0 * inch])
    qr_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f8fafc')),
        ('BOX', (0, 0), (-1, -1), 1.5, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e2e8f0')),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
    ]))
    right_flow.append(qr_table)

    # -------------------------------------------------------------------------
    # Combine Columns into 3-Column Master Grid
    # -------------------------------------------------------------------------
    col1_width = 14.8 * inch
    col2_width = 15.2 * inch
    col3_width = 14.8 * inch

    three_col_data = [[
        left_flow,
        mid_flow,
        right_flow
    ]]

    grid_table = Table(three_col_data, colWidths=[col1_width, col2_width, col3_width])
    grid_table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 12),
        ('RIGHTPADDING', (0, 0), (-1, -1), 12),
        ('TOPPADDING', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
        ('BACKGROUND', (0, 0), (0, 0), colors.white),
        ('BACKGROUND', (1, 0), (1, 0), colors.white),
        ('BACKGROUND', (2, 0), (2, 0), colors.white),
        ('BOX', (0, 0), (0, 0), 1.5, CARD_BORDER),
        ('BOX', (1, 0), (1, 0), 1.5, CARD_BORDER),
        ('BOX', (2, 0), (2, 0), 1.5, CARD_BORDER),
    ]))
    story.append(grid_table)
    story.append(Spacer(1, 14))

    # =========================================================================
    # 3. BOTTOM FOOTER BANNER (Full Width)
    # =========================================================================
    footer_data = [
        [
            Paragraph('<b>બાળવૈજ્ઞાનિકો (Student Scientists):</b> કૃતાર્થ રોનક બારોટ & અંશ કિરણભાઈ પ્રજાપતિ', style_footer_text),
            Paragraph('<b>માર્ગદર્શક શિક્ષક (Mentor):</b> શ્રી મનોજભાઈ પરમાર', style_footer_text),
            Paragraph('<b>શાળા:</b> એમ. એમ. કરોડિયા પ્રાથમિક શાળા, તરસાડી કોસંબા (R.S)', style_footer_text)
        ]
    ]
    footer_table = Table(footer_data, colWidths=[15.4 * inch, 14.6 * inch, 16.4 * inch])
    footer_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), NAVY_DEEP),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 12),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 12),
        ('BOX', (0, 0), (-1, -1), 2, colors.HexColor('#fde047')),
    ]))
    story.append(footer_table)

    doc.build(story)
    print(f"Science Fair Banner PDF generated successfully at: {pdf_path}")

if __name__ == "__main__":
    build_banner()
