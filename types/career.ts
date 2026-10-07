export type CareerCategory = 
  | 'law'
  | 'medical' 
  | 'tech' 
  | 'govt' 
  | 'finance' 
  | 'creative' 
  | 'engineering' 
  | 'education' 
  | 'business'
  | 'defense'
  | 'aviation'
  | 'sports';

export interface CareerGoal {
  id: string;
  title: string;
  title_gu: string;
  category: CareerCategory;
  category_gu: string;
  short_desc_gu: string;
  tags: string[];
  trending?: boolean;
}

export interface CareerInput {
  career_id: string;
  career_name: string;
  standard: string;
  fav_subjects: string[];
  strength_area: string;
  current_experience: string;
  learning_preference: string;
  commitment_level: string;
}

export interface CareerRoadmapStage {
  stage_num: number;
  title: string;
  subtitle_gu: string;
  period_gu: string;
  what_to_learn: string[];
  why_it_matters: string;
  key_skills: string[];
  suggested_next_step: string;
}

export interface SkillGapItem {
  skill_name: string;
  current_level: number; // 0 to 10
  needed_level: number;  // 0 to 10
  category_gu: string;
  tip_gu: string;
}

export interface ActionPlanItem {
  step: number;
  title: string;
  action: string;
  timeframe: string;
  priority: 'high' | 'medium';
}

export interface TimelinePlanItem {
  period: string; // "હમણાં", "આગામી ૩ મહિના", "૬ મહિના", "૧ વર્ષ", "લાંબા ગાળાનું લક્ષ્ય"
  focus: string;
  actions: string[];
  milestone: string;
}

export interface AlternativeCareer {
  title: string;
  desc_gu: string;
  match_pct: number;
}

export interface ResourceGuidance {
  title: string;
  desc_gu: string;
  type_gu: string;
}

export interface CareerAnalysisResult {
  career: CareerGoal;
  student_stage: string;
  is_custom?: boolean;
  assessment_summary_gu: string;
  readiness: {
    foundation_pct: number;
    skills_pct: number;
    experience_pct: number;
    overall_readiness_gu: string;
  };
  roadmap: CareerRoadmapStage[];
  immediate_actions: ActionPlanItem[];
  skill_gap: SkillGapItem[];
  timeline_plan: TimelinePlanItem[];
  alternative_careers: AlternativeCareer[];
  more_info_resources: ResourceGuidance[];
  generated_at: string;
}
