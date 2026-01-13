export const EMPLOYMENT_TYPES = [
  { id: 1, name: 'Salaried' },
  { id: 2, name: 'Self Employed Professional' },
  { id: 3, name: 'Self Employed Non-professional' },
  { id: 4, name: 'Retired' },
  { id: 5, name: 'Other' }
];

export const GENDER_ENUMS = {
  male: 1,
  female: 2,
  other: 3
};

export const GENDER_ENUMS_NEW = [
  { name: 'Male', id: 1, src: '/images/male.png' },
  { name: 'Female', id: 2, src: '/images/female.png' }
];

export const INPUT_ICONS = {
  'money-bag': {
    height: '25px',
    width: '19px',
    src: '/images/money-bag.png'
  },
  'cake-icon': {
    height: '25px',
    width: '23px',
    src: '/images/cake.png'
  },
  'location-icon': {
    height: '25px',
    width: '14px',
    src: '/images/location.png'
  },
  'envelope-icon': {
    height: '25px',
    width: '25px',
    src: '/images/letter.png'
  },
  'mailbox-icon': {
    height: '25px',
    width: '26px',
    src: '/images/mailbox.png'
  },
  'building-icon': {
    height: '25px',
    width: '26px',
    src: '/images/building.png'
  }
};

export const STEPS_TO_NAVIGATE = {
  profile_detail: '/loan-requirement',
  profile_loan_detail: '/personal-detail',
  cibil_score: '/cibil-score',
  application_personal: '/application/applicant',
  application_professional: '/application/professional-details',
  application_property: '/application/property-details',
  application_documents: '/application/documents',
  application_offers: '/application/offers'
};

export const APPLICATION_PATHS_TO_NAVIGATE = {
  '/application/applicant': 'application_personal',
  '/application/property-details': 'application_property',
  '/application/professional-details': 'application_professional',
  '/application/documents': 'application_documents',
  '/application/offers': 'application_offers'
};

export const PROFILE_STEPS = {
  profile_loan_detail: 'profile_loan_detail',
  profile_detail: 'profile_detail',
  cibil_score: 'cibil_score'
};

export const SETP_COMPLETATION_PERCENTAGE = {
  application_personal: 30,
  application_professional: 30,
  application_property: 30,
  application_documents: 5,
  application_offers: 5
};
export const PRIVACY_POLICY_URL = 'https://instapreps.com/privacypolicy';
