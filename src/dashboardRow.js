export const dashboards = [
  {
    id: 1,
    name: "Finance",
    reports: ["Balance Sheet", "Profit and Loss", "Cash Flow"],
  },
  {
    id: 2,
    name: "Admin",
    reports: [
      "User Management",
      "Content Management",
      "Analytics and Reporting",
      "System Health and Monitoring",
      "Customer Support and Tickets",
      "Inventory Management",
      "Task Management",
      "Financial Management",
      "Security and Access Control",
      "Communication and Notifications",
      "Settings and Configuration",
      "Audit Trail and History",
      "Data Visualization",
      "Mobile Responsiveness",
      "Customization and Personalization",
    ],
  },
  {
    id: 3,
    name: "HR",
    reports: [
      "Employee Performance Dashboard",
      "Recruitment Dashboard",
      "Employee Engagement Dashboard",
      "Training and Development Dashboard",
      "Turnover and Retention Dashboard",
      "Diversity and Inclusion Dashboard",
      "Compensation and Benefits Dashboard",
      "Attendance and Leave Management Dashboard",
      "Health and Wellness Dashboard",
      "HR Analytics Dashboard",
    ],
  },
  {
    id: 4,
    name: "MIS",
    reports: ["Balance Sheet", "Profit and Loss", "Cash Flow", "Prepare"],
  },
  {
    id: 5,
    name: "Marketing",
    reports: ["Balance Sheet", "Profit and Loss", "Cash Flow", "Prepare"],
  },
  {
    id: 6,
    name: "KPI",
    reports: ["Balance Sheet", "Profit and Loss", "Cash Flow", "Prepare"],
  },
  {
    id: 7,
    name: "SAAS",
    reports: ["Balance Sheet", "Profit and Loss", "Cash Flow", "Prepare"],
  },
  {
    id: 8,
    name: "Travel and tourism",
    reports: ["Balance Sheet", "Profit and Loss", "Cash Flow", "Prepare"],
  },
  {
    id: 9,
    name: "Hospitality",
    reports: ["Balance Sheet", "Profit and Loss", "Cash Flow", "Prepare"],
  },
  {
    id: 10,
    name: "BPO",
    reports: ["Balance Sheet", "Profit and Loss", "Cash Flow", "Prepare"],
  },
  {
    id: 11,
    name: "KPO",
    reports: ["Balance Sheet", "Profit and Loss", "Cash Flow", "Prepare"],
  },
];

export const appsName = [
  { id: 1, name: "Account - Billing" },
  { id: 2, name: "Account - Notifications" },
  { id: 3, name: "Account - Profile" },
  { id: 4, name: "Account - Security" },
  { id: 5, name: "Auth - Login" },
  { id: 6, name: "Auth - Login (Social)" },
  { id: 7, name: "Auth - Multi Tenant" },
  { id: 8, name: "Auth - Password" },
  { id: 9, name: "Auth - Password (Social)" },
  { id: 10, name: "Auth - Register" },
  { id: 11, name: "Auth - Register (Social)" },
  { id: 12, name: "Invoice" },
  { id: 13, name: " Article" },
  { id: 14, name: "Knowledgebase - Category" },
  { id: 15, name: "Knowledgebase - Home 1" },
  { id: 16, name: "Knowledgebase - Home 2" },
  { id: 17, name: "Pricing" },
  { id: 18, name: "Wizard" },
];

export const arrangedApps = [
  {
    category: "Accounting and Bookkeeping",
    apps: [
      { id: 1, name: "Billing" },
      { id: 2, name: "Notifications" },
      { id: 3, name: "Profile" },
      { id: 4, name: "Security" },
    ],
  },
  {
    category: "Payroll Processing",
    apps: [
      { id: 5, name: " Login" },
      { id: 6, name: " Login (Social)" },
      { id: 7, name: " Multi Tenant" },
      { id: 8, name: " Password" },
      { id: 9, name: " Password (Social)" },
      { id: 10, name: " Register" },
      { id: 11, name: " Register (Social)" },
    ],
  },
  {
    category: "Tax Planning and Preparation",
    apps: [{ id: 12, name: "Invoice" }],
  },
  {
    category: "Financial Reporting",
    apps: [
      { id: 13, name: " Article" },
      { id: 14, name: " Category" },
      { id: 15, name: " Home 1" },
      { id: 16, name: " Home 2" },
    ],
  },
  {
    category: "Audit ,Due diligence and Compliances",
    apps: [{ id: 17, name: "Pricing" }],
  },
  // {
  //   category: "Wizard",
  //   apps: [{ id: 18, name: "Wizard" }],
  // },
];

export const uploadDocs = [
  {
    category: "Invoices",
    id: Date.now(),
    subCategory: [
      {
        name: "Sales",
        listName: ["Goods", "Services"],
      },
      {
        name: "Purchase",
        listName: ["Services", "Assets", "Investment"],
      },
      {
        name: "Credit Note",
        listName: ["Credit note"],
      },
      {
        name: "Debit Notes",
        listName: ["Debit Note"],
      },
      {
        name: "Expenses",
        listName: ["Expenses"],
      },
      {
        name: "Capital",
        listName: ["Capital"],
      },
    ],
  },
  {
    category: "Upload Bank Statement",
    id: Date.now(),
    subCategory: [
      {
        name: "Saving Account",
        listName: ["Bank Statement"],
      },
      {
        name: "Current Account",
        listName: ["Bank Statement"],
      },
    ],
  },
  {
    category: "Other Docs",
    id: Date.now(),
    subCategory: [
      {
        name: "Docs",
        listName: ["Docs"],
      },
    ],
  },

  {
    category: "Reports",
    id: Date.now(),
    subCategory: [
      {
        name: "Finance",
        listName: ["Balance", "Profit Loss", "cash flow"],
      },
      {
        name: "Admin",
        listName: [
          "User Management",
          "Content Management",
          "Analytics and Reporting",
          "System Health and Monitoring",
          // "Customer Support and Tickets",
          // "Inventory Management",
          // "Task Management",
          // "Financial Management",
          // "Security and Access Control",
          // "Communication and Notifications",
          // "Settings and Configuration",
          // "Audit Trail and History",
          // "Data Visualization",
          // "Mobile Responsiveness",
          // "Customization and Personalization",
        ],
      },
      {
        name: "HR",
        listName: [
          "Employee Performance Dashboard",
          "Recruitment Dashboard",
          "Employee Engagement Dashboard",
          // "Training and Development Dashboard",
          // "Turnover and Retention Dashboard",
          // "Diversity and Inclusion Dashboard",
          // "Compensation and Benefits Dashboard",
          // "Attendance and Leave Management Dashboard",
          // "Health and Wellness Dashboard",
          // "HR Analytics Dashboard"
        ],
      },
      {
        name: "MIS",
        listName: ["Docs"],
      },
      {
        name: "Marketing",
        listName: ["Docs"],
      },
    ],
  },
];
