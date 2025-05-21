import {
	Contact2,
	FileCode2,
	Home,
	ListCollapse,
} from 'lucide-react'

export const navLinks = [
  { name: 'Home', route: '', icon: Home },

  { 
    name: 'Programs', 
    route: 'programs',
    icon: ListCollapse,
    label: 'Programs', 
    dropdownItems: [
      { name: 'International educational programs', route: 'international' },
      { name: 'Specialized courses', route: 'specialized-courses' },
      { name: 'Islamic Finance Literacy Course', route: 'islamic-finance' },
      { name: 'Certification program', route: 'certification-program' }
    ]
  },

  { name: 'Finance Tools', route: 'financetools', icon: FileCode2 },
  { name: 'Contact', route: 'contact', icon: Contact2 },
]

export const faqs = [
  {
    question: "Will I receive lifetime access to the courses?",
    answer: "Yes, once you enroll, you’ll have lifetime access to all course materials.",
  },
  {
    question: "Can I use the materials for community teaching?",
    answer: "Absolutely. Our content is designed to be shared in educational and community settings.",
  },
  {
    question: "Is there a free trial for the courses?",
    answer: "Yes, we offer a 7-day free trial on selected courses.",
  },
  {
    question: "Who can benefit from these courses?",
    answer: "Anyone interested in learning or teaching Islamic finance and muamalat."
  },
    {
    question: "Who can benefit from these courses?",
    answer: "Anyone interested in learning or teaching Islamic finance and muamalat."
  },
    {
    question: "Who can benefit from these courses?",
    answer: "Anyone interested in learning or teaching Islamic finance and muamalat."
  },
]

export const lngs = [
	{ route: 'en', label: 'English' },
	{ route: 'uz', label: "O'zbekcha" },
	{ route: 'ru', label: 'Русский' },
]

export const service = [
	{
		title: 'Islamic Fund Management',
		excerpt: 'We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.',
		image: '/service/3.png',
	},
	{
		title: 'International Relations',
		excerpt: 'We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.',
		image: '/service/2.png',
	},
	{
		title: 'Education and Training',
		excerpt: 'We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.',
		image: '/service/3.png',
	},
	{
		title: 'For Islamic Banks',
		excerpt: 'We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.',
		image: '/service/3.png',
	},
	{
		title: 'Islamic Capital Market',
		excerpt: 'We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.',
		image: '/service/2.png',
	},
	{
		title: 'Shariah Compliance Audit',
		excerpt: 'We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.',
		image: '/service/3.png',
	},
]

export const companies = [
	{
		title:'Stripe',
	},
	{
		title:'American',
	},	
	{
		title:'Western',
	},
	{
		title:'Klarna',
	},
	{
		title:'Skrill',
	},	
	{
		title:'Amazon',
	},
	{
		title:'PayPal',
	},
	{
		title:'Wise',
	},
	{
		title:'Revolut',
	},
]

export const media = [
	{
		title:"Why Islamic finance?",
		image:"/media/Rectangle 4.png",
		image1:"/media/play-circle.png"
	},
	{
		title:"What makes Islamic finance unique?",
		image:"/media/Rectangle 5 (1).png",
		image1:"/media/play-circle (1).png"
	},
	{
		title:"How is risk managed in Islamic finance?",
		image:"/media/Rectangle 5 (2).png",
		image1:"/media/play-circle (1).png"
	},
	{
		title:"Why Islamic finance?",
		image:"/media/Rectangle 4.png",
		image1:"/media/play-circle.png"
	},
	{
		title:"What makes Islamic finance unique?",
		image:"/media/Rectangle 5 (1).png",
		image1:"/media/play-circle (1).png"
	},
	{
		title:"How is risk managed in Islamic finance?",
		image:"/media/Rectangle 5 (2).png",
		image1:"/media/play-circle (1).png"
	},
]

export const frame = [
	{
		description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.',
		image: '/Frame.png',
		name: 'Finlay Kirk',
		title: 'Web Designer'
	},
	{
		description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.',
		image: '/Frame.png',
		name: 'Finlay Kirk',
		title: 'Web Designer'
	},
	{
		description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.',
		image: '/Frame.png',
		name: 'Finlay Kirk',
		title: 'Web Designer'
	},
]

export const course = [
	{
		name: 'Design',
		image: '/course/Sample 46.png',
		title: 'Various versions have evolved daf',
		narx: '500',
		image1: '/F1.png'
	},
	{
		name: 'Business',
		image: '/course/Sample 26.png',
		title: 'Various versions have evolved daf',
		narx: '700',
		image1: '/F2.png'
	},{
		name: 'Business',
		image: '/course/Sample 12.png',
		title: 'Various versions have evolved daf',
		narx: '900',
		image1: '/F1.png'
	},{
		name: 'Design',
		image: '/course/Sample 46.png',
		title: 'Various versions have evolved daf',
		narx: '400',
		image1: '/F2.png'
	},{
		name: 'Business',
		image: '/course/Sample 26.png',
		title: 'Various versions have evolved daf',
		narx: '600',
		image1: '/F1.png'
	},{
		name: 'Business',
		image: '/course/Sample 12.png',
		title: 'Various versions have evolved daf',
		narx: '800',
		image1: '/F2.png'
	},{
		name: 'Design',
		image: '/course/Sample 46.png',
		title: 'Various versions have evolved daf',
		narx: '400',
		image1: '/F2.png'
	},{
		name: 'Business',
		image: '/course/Sample 26.png',
		title: 'Various versions have evolved daf',
		narx: '600',
		image1: '/F1.png'
	},{
		name: 'Business',
		image: '/course/Sample 12.png',
		title: 'Various versions have evolved daf',
		narx: '800',
		image1: '/F2.png'
	},
]

export const service2 = [
	{
		name: 'Islamic Fund Management',
		title: 'Start date : 21 December 2024',
		excerpt: 'We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.',
		image: '/image 1.png',
		image1: '/Frame 1116606850.png'
	},
	{
		name: 'Islamic Fund Management',
		title: 'Start date : 21 December 2024',
		excerpt: 'We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.',
		image: '/image 1.png',
		image1: '/Frame 1116606850.png'
	},
	{
		name: 'Islamic Fund Management',
		title: 'Start date : 21 December 2024',
		excerpt: 'We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.',
		image: '/image 1.png',
		image1: '/Frame 1116606850.png'
	},
	{
		name: 'Islamic Fund Management',
		title: 'Start date : 21 December 2024',
		excerpt: 'We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.',
		image: '/image 1.png',
		image1: '/Frame 1116606850.png'
	},
	{
		name: 'Islamic Fund Management',
		title: 'Start date : 21 December 2024',
		excerpt: 'We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.',
		image: '/image 1.png',
		image1: '/Frame 1116606850.png'
	},
	{
		name: 'Islamic Fund Management',
		title: 'Start date : 21 December 2024',
		excerpt: 'We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.',
		image: '/image 1.png',
		image1: '/Frame 1116606850.png'
	},
]

export const services3 = [
  { label: "Web Development", value: "web" },
  { label: "UI/UX Design", value: "design" },
  { label: "SEO Optimization", value: "seo" },
  { label: "Cybersecurity Consulting", value: "cyber" },
]

export const budgets = [
  { label: "$500 - $1,000", value: "500-1000" },
  { label: "$1,000 - $5,000", value: "1000-5000" },
  { label: "$5,000 - $10,000", value: "5000-10000" },
  { label: "$10,000+", value: "10000+" },
]

export const countries = [
    "Uzbekistan", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Russia", 
    "United States", "United Kingdom", "Turkey", "Germany", "France", "Saudi Arabia"
  ];