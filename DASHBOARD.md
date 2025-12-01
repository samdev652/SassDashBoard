# SaaS Admin Dashboard - Vendor Security Platform

A modern, professional SaaS Admin Dashboard built with React, TypeScript, and Shadcn UI, featuring a comprehensive Vendor Security management interface.

## 🎨 Features

### ✅ Implemented

- **Dark Mode Support** - Toggle between light and dark themes
- **Responsive Layout** - Sidebar navigation with sticky header
- **Dashboard Analytics**

  - Real-time security metrics
  - 4 key performance indicators (KPIs)
  - Interactive charts using Recharts
  - Security score trends
  - Risk distribution visualization
  - Compliance tracking
  - Security incidents monitoring

- **Vendor Management**

  - Advanced data table with 12 sample vendors
  - Sortable columns
  - Pagination (8 items per page)
  - Risk level badges (Low, Medium, High, Critical)
  - Security score with visual indicators
  - Compliance percentage tracking
  - Quick actions dropdown menu

- **Activity Feed**

  - Real-time activity monitoring
  - Status-based color coding
  - Recent vendor actions

- **UI Components**
  - Professional notifications system
  - User profile dropdown
  - Search functionality
  - Custom stat cards
  - Responsive charts

## 🛠️ Tech Stack

- **React 19.2.0** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Shadcn UI** - Component library
- **Recharts** - Data visualization
- **Lucide React** - Icons
- **Radix UI** - Headless components

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── table.tsx
│   │   ├── badge.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── avatar.tsx
│   │   ├── input.tsx
│   │   └── switch.tsx
│   ├── Dashboard.tsx    # Main dashboard view
│   ├── Header.tsx       # Top navigation bar
│   ├── Sidebar.tsx      # Left sidebar navigation
│   ├── StatCard.tsx     # KPI stat cards
│   ├── VendorTable.tsx  # Vendor data table
│   └── SecurityCharts.tsx # Chart components
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Root component
└── main.tsx             # Entry point
```

## 🎯 Key Features

### Dashboard Metrics

- **Total Vendors**: 12 active vendors
- **Average Security Score**: Real-time calculation
- **Critical Issues**: High/critical risk tracking
- **Compliance Rate**: Overall compliance percentage

### Vendor Security Table

- Sortable by name, security score, and other fields
- Color-coded risk levels
- Progress indicators for security scores and compliance
- Last audit date tracking
- Quick action menus for each vendor

### Charts & Analytics

- **Security Score Trend** - 6-month area chart
- **Risk Distribution** - Pie chart breakdown
- **Security Incidents** - Line chart timeline
- **Compliance Scores** - Bar chart by category

## 🎨 Design Features

- Clean, modern interface
- Dark mode optimized
- Responsive design (mobile, tablet, desktop)
- Smooth transitions and animations
- Professional color scheme
- Accessible UI components

## 🔧 Customization

### Adding New Vendors

Edit `src/components/Dashboard.tsx` and modify the `mockVendors` array.

### Changing Theme Colors

Modify CSS variables in `src/index.css` under `:root` and `.dark` classes.

### Adding New Pages

1. Create new component in `src/components/`
2. Add route to sidebar in `Sidebar.tsx`
3. Add conditional rendering in `App.tsx`

## 📊 Sample Data

The dashboard includes 12 sample vendors with varying:

- Security scores (45-95)
- Risk levels (Low, Medium, High, Critical)
- Compliance rates (62-98%)
- Status types (Active, Review, Suspended)

## 🌟 Future Enhancements

Potential additions:

- Real-time notifications
- Export functionality (PDF, CSV)
- Advanced filtering
- Vendor comparison view
- Audit trail logging
- Integration with security APIs
- Multi-user role management
- Customizable dashboards

## 📝 License

MIT

## 👨‍💻 Author

Built with ❤️ using React, TypeScript, and Shadcn UI
