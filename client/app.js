const views = {
  dashboard: {
    eyebrow: "Premium prototype",
    title: "HarGhar AI Commerce OS",
    html: `
      <section class="hero-band">
        <div class="hero-copy">
          <span class="status-pill">Live demo workspace</span>
          <h2>One operating layer for every neighborhood commerce brand.</h2>
          <p>Orchestrate storefronts, inventory, campaigns, creator drops, WhatsApp support, and AI merchandising from a single executive-grade cockpit.</p>
          <div class="hero-actions">
            <button class="primary-button" data-view="analytics">Generate Growth Plan</button>
            <button class="secondary-button" data-view="marketplace">View Store Network</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="market-card floating"><span>GMV today</span><strong>Rs 18.7L</strong><small>+28.4% vs last Monday</small></div>
          <div class="signal-grid">${"<div></div>".repeat(12)}</div>
          <div class="route-line"></div>
          <div class="market-card bottom"><span>AI margin lift</span><strong>12.6%</strong><small>pricing engine active</small></div>
        </div>
      </section>
      <section class="metrics-grid">
        ${metric("Revenue", "Rs 4.82Cr", "+31.2% projected")}
        ${metric("Orders", "98,420", "+22.1% this month")}
        ${metric("Customers", "12.8L", "+41k new")}
        ${metric("Conversion", "5.8%", "+0.9 pts")}
      </section>
      <section class="content-grid">
        <article class="panel score-panel">
          <div class="panel-header"><div><span class="eyebrow">Today</span><h3>Performance Score</h3></div><span class="badge">Excellent</span></div>
          <div class="score-ring"><strong>94</strong><span>/100</span></div>
          <p class="page-copy">Revenue velocity, repeat orders, and fulfillment SLA are all above target.</p>
        </article>
        <article class="panel">
          <div class="panel-header"><div><span class="eyebrow">AI business summary</span><h3>Board Brief</h3></div></div>
          <p class="page-copy">GMV is pacing 18% ahead of plan. Mumbai grocery bundles, Delhi beauty subscriptions, and Jaipur fashion drops are driving the strongest contribution margin.</p>
        </article>
        <article class="panel">
          <div class="panel-header"><div><span class="eyebrow">Live now</span><h3>Active Users</h3></div><span class="live-dot">Live</span></div>
          <div class="big-number">18,742</div>
          <p class="page-copy">3,284 visitors are currently in checkout and 842 carts are high intent.</p>
        </article>
        ${growthPanel()}
        ${forecastPanel()}
        ${progressPanel()}
        ${productListPanel("Top Selling Products", "Revenue leaders", [["Royal Basmati Reserve", "Rs 38.2L"], ["Glow Serum Combo", "Rs 31.6L"], ["Daily Staples Pack", "Rs 24.9L"], ["Premium Snack Box", "Rs 18.4L"]])}
        ${productListPanel("Most Viewed Products", "Discovery signals", [["Glow Serum Combo", "84.2k views"], ["Festival Gift Hamper", "72.8k views"], ["Organic Atta 10kg", "61.1k views"], ["Copper Bottle Set", "48.9k views"]])}
        ${satisfactionPanel()}
        ${visitorPanel()}
        ${suggestionPanel()}
        ${activityPanel()}
        ${quickActionsPanel()}
        ${heatmapPanel()}
        ${miniGraphPanel("Weekly Revenue Graph", "7-day revenue", [48, 62, 57, 74, 69, 88, 96])}
        ${miniGraphPanel("Monthly Growth Graph", "30-day expansion", [38, 44, 52, 49, 61, 70, 76, 82, 91, 97])}
      </section>`
  },
  customerExperience: {
    eyebrow: "Frontend customer app preview",
    title: "Customer Experience Preview",
    html: `
      <section class="customer-preview-hero">
        <div>
          <span class="status-pill">Mobile storefront prototype</span>
          <h2>Premium shopping flows for discovery, checkout, loyalty, and AI-assisted buying.</h2>
          <p>Preview the customer-facing app across homepage, listing, product details, cart, checkout, tracking, wishlist, and AI shopping assistant screens.</p>
          <div class="hero-actions">
            <button class="primary-button">Preview App Flow</button>
            <button class="secondary-button">Share Prototype</button>
          </div>
        </div>
        <div class="preview-feature-cloud">
          ${previewFeature("Floating Product Cards")}
          ${previewFeature("Featured Brands")}
          ${previewFeature("Free Shipping Progress Bar")}
          ${previewFeature("Voice Search")}
          ${previewFeature("AI Search")}
          ${previewFeature("Visual Search")}
          ${previewFeature("Price Drop Alerts")}
          ${previewFeature("BNPL")}
          ${previewFeature("Live Tracking")}
        </div>
      </section>
      <section class="customer-app-stage">
        ${phoneMockup("Homepage", "HG", `
          <div class="app-video-banner"><span>Video Banner</span><strong>Fresh deals live</strong></div>
          <div class="app-search-row"><span>Voice</span><span>AI Search</span><span>Visual</span></div>
          <div class="floating-product-row">${miniProduct("Basmati", "Rs 429")}${miniProduct("Glow Kit", "Rs 899")}</div>
          <div class="app-section-title">Trending Products</div>
          <div class="app-product-strip">${tinyTile("Rice")}${tinyTile("Serum")}${tinyTile("Snacks")}</div>
          <div class="brand-strip"><span>FreshKart</span><span>GlowHouse</span></div>
        `)}
        ${phoneMockup("Product Listing", "PLP", `
          <div class="app-search-pill">AI search: weekend grocery bundle</div>
          <div class="flash-countdown">Flash Sale 02:18:44</div>
          <div class="listing-grid">${listingCard("Basmati", "Compare")}${listingCard("Ghee", "Alert")}${listingCard("Snacks", "Deal")}${listingCard("Serum", "Trend")}</div>
        `)}
        ${phoneMockup("Product Details", "PDP", `
          <div class="product-hero-card"><span>360 Preview</span><strong>Royal Basmati Reserve</strong></div>
          <div class="comparison-row"><span>Product Comparison</span><b>3 similar</b></div>
          <div class="price-alert">Price Drop Alerts enabled</div>
          <button class="mock-button">Add to Shared Wishlist</button>
        `)}
        ${phoneMockup("Cart", "CART", `
          <div class="shipping-progress"><span style="width:72%"></span></div>
          <small>Rs 460 away from free shipping</small>
          ${cartLine("Basmati Reserve", "Rs 429")}
          ${cartLine("Pure Ghee", "Rs 520")}
          <button class="mock-button">One Click Checkout</button>
        `)}
        ${phoneMockup("Checkout", "PAY", `
          <div class="checkout-total"><span>Total</span><strong>Rs 2,840</strong></div>
          <div class="payment-option">One Click Checkout</div>
          <div class="payment-option">Buy Now Pay Later</div>
          <div class="payment-option">UPI Auto-fill</div>
          <button class="mock-button">Place Order</button>
        `)}
        ${phoneMockup("Order Tracking", "TRK", `
          <div class="mini-map"><span class="map-pin start">WH</span><span class="map-pin rider">RD</span><span class="map-pin end">YOU</span></div>
          <div class="tracking-steps"><span>Packed</span><span>Out now</span><span>12 min away</span></div>
          <div class="live-dot">Live Delivery Tracking</div>
        `)}
        ${phoneMockup("Wishlist", "WISH", `
          <div class="shared-wishlist-head"><strong>Shared Wishlist</strong><span>4 members</span></div>
          ${wishlistLine("Festival Hamper", "Price drop")}
          ${wishlistLine("Glow Serum", "Back in stock")}
          ${wishlistLine("Copper Bottle", "Shared")}
          <button class="mock-button">Send Wishlist</button>
        `)}
        ${phoneMockup("AI Shopping Assistant", "AI", `
          <div class="assistant-bubble shopper">Find healthy snacks under Rs 800.</div>
          <div class="assistant-bubble ai">Built a snack box with 18% savings and free shipping.</div>
          <div class="app-search-row"><span>Voice</span><span>Camera</span><span>Compare</span></div>
          <button class="mock-button">Add AI Picks</button>
        `)}
      </section>`
  },
  products: {
    eyebrow: "Product operating layer",
    title: "Products",
    html: `
      <section class="page-grid">
        ${metric("Active products", "18,420", "+812 enriched")}
        ${metric("AI SEO score", "92%", "+14 pts")}
        ${metric("Margin lift", "12.6%", "pricing optimized")}
      </section>
      <section class="panel">
        <div class="panel-header">
          <div><span class="eyebrow">Product management</span><h3>Catalog Workspace</h3></div>
          <div class="segmented"><button class="active" data-product-view="grid">Grid</button><button data-product-view="list">List</button></div>
        </div>
        <div class="product-grid-view" id="productGridView">
          ${productCard("Royal Basmati Reserve", "AI suggests 3% price lift", "Rs 429", "Grocery")}
          ${productCard("Glow Serum Combo", "Creator drop ready", "Rs 899", "Beauty")}
          ${productCard("Daily Staples Pack", "Best for subscription", "Rs 1,249", "Essentials")}
          ${productCard("Festival Gift Hamper", "Frequently bought with premium snacks", "Rs 1,799", "Gifting")}
        </div>
        <div class="product-list-view" id="productListView">
          ${productListRow("Royal Basmati Reserve", "Grocery", "12 variants", "Rs 429", "8,420 units")}
          ${productListRow("Glow Serum Combo", "Beauty", "8 variants", "Rs 899", "3,180 units")}
          ${productListRow("Daily Staples Pack", "Essentials", "6 variants", "Rs 1,249", "5,980 units")}
          ${productListRow("Festival Gift Hamper", "Gifting", "4 bundles", "Rs 1,799", "1,840 units")}
        </div>
      </section>
      <section class="content-grid">
        ${aiGeneratorPanel("AI Product Description Generator", "Generate premium descriptions for marketplace, D2C, and WhatsApp storefronts.", "Generate Description")}
        ${aiGeneratorPanel("AI SEO Generator", "Create SEO titles, meta descriptions, URL slugs, and keyword clusters.", "Generate SEO")}
        ${aiGeneratorPanel("AI Product Tag Generator", "Suggest tags for category placement, campaigns, bundles, and search filters.", "Generate Tags")}
        ${productMediaPanel()}
        ${productBundlePanel()}
        ${suggestionShelf("Cross Sell Suggestions", [["Copper Bottle Set", "Pairs with Daily Staples"], ["Premium Snack Box", "Add to grocery carts"], ["Organic Jaggery", "Healthy pantry upsell"]])}
        ${suggestionShelf("Upsell Suggestions", [["Basmati 10kg Family Pack", "Higher AOV"], ["Glow Serum Pro Kit", "Premium routine"], ["Festival Deluxe Hamper", "Luxury gifting"]])}
      </section>
      ${productDetailModal()}`
  },
  categories: {
    eyebrow: "Catalog architecture",
    title: "Categories",
    html: `
      <section class="page-grid">
        ${metric("Categories", "142", "18 AI generated")}
        ${metric("Featured shelves", "36", "personalized")}
        ${metric("Collection GMV", "Rs 1.8Cr", "+24.7%")}
      </section>
      <section class="content-grid">
        <article class="panel wide">
          <div class="panel-header"><div><span class="eyebrow">Category cards</span><h3>Smart Collections</h3></div><button class="primary-button">Create Category</button></div>
          <div class="category-card-grid">
            ${categoryCard("Grocery Essentials", "Fresh staples, pantry, dairy", "GE", "Rs 82.4L")}
            ${categoryCard("Beauty and Wellness", "Skincare, haircare, wellness", "BW", "Rs 54.1L")}
            ${categoryCard("Fashion Drops", "Creator-led apparel edits", "FD", "Rs 48.8L")}
            ${categoryCard("Home Upgrades", "Kitchen, decor, utility", "HU", "Rs 31.6L")}
          </div>
        </article>
        ${categoryBannerPanel()}
        ${categorySeoPanel()}
        ${featuredCategoriesPanel()}
        ${dragDropPanel()}
        ${megaMenuPanel()}
      </section>`
  },
  inventory: {
    eyebrow: "Stock intelligence",
    title: "Inventory",
    html: `
      <section class="page-grid">
        ${metric("Units in stock", "8.4L", "74 warehouses")}
        ${metric("Stockout risks", "128", "AI triaged")}
        ${metric("Auto reorders", "312", "ready")}
      </section>
      <section class="content-grid">
        <article class="panel score-panel">
          <div class="panel-header"><div><span class="eyebrow">Inventory health score</span><h3>Network Health</h3></div><span class="badge">Stable</span></div>
          <div class="score-ring cyan"><strong>87</strong><span>/100</span></div>
          <p class="page-copy">Healthy availability across 74 warehouses with concentrated risk in dairy and premium beauty SKUs.</p>
        </article>
        ${stockOverviewPanel()}
        ${lowStockPanel()}
        ${warehousePanel()}
        ${stockHistoryPanel()}
        ${qrPanel()}
        ${bulkInventoryPanel()}
        ${inventoryFiltersPanel()}
      </section>`
  },
  marketplace: {
    eyebrow: "Multi vendor marketplace",
    title: "Marketplace",
    html: `
      <section class="page-grid">
        ${metric("Active vendors", "2,418", "+186 this week")}
        ${metric("Vendor GMV", "Rs 8.7Cr", "+28.4%")}
        ${metric("Pending verification", "128", "AI triaged")}
        ${metric("Avg. commission", "11.8%", "+1.2 pts")}
      </section>
      <section class="content-grid">
        ${vendorDashboardPanel()}
        ${vendorEarningsPanel()}
        ${commissionSettingsPanel()}
        ${vendorVerificationPanel()}
        ${vendorAnalyticsPanel()}
        ${vendorPerformanceScoresPanel()}
      </section>`
  },
  aiCenter: {
    eyebrow: "AI command layer",
    title: "AI Center",
    html: `
      <section class="ai-command-hero">
        <div class="ai-hero-copy">
          <span class="status-pill">Neural commerce engine online</span>
          <h2>Autonomous intelligence for every sale, shopper, SKU, and campaign.</h2>
          <p>Forecast demand, generate content, score customer intent, detect review themes, and launch growth actions from one AI control room.</p>
          <div class="hero-actions">
            <button class="primary-button">Run AI Scan</button>
            <button class="secondary-button">Generate Strategy</button>
          </div>
        </div>
        <div class="neural-core">
          <div class="core-ring"></div>
          <div class="core-ring delay"></div>
          <strong>AI</strong>
          <span>42 actions queued</span>
        </div>
      </section>
      <section class="page-grid">
        ${metric("AI actions", "42", "ready for approval")}
        ${metric("Forecast accuracy", "87%", "+6 pts")}
        ${metric("Predicted uplift", "Rs 38.6L", "next 30 days")}
        ${metric("Content generated", "6,812", "this month")}
      </section>
      <section class="ai-grid">
        ${aiShoppingAssistantPanel()}
        ${aiSalesForecastPanel()}
        ${aiDemandPredictionPanel()}
        ${aiProductRecommendationsPanel()}
        ${aiMarketingSuggestionsPanel()}
        ${aiSeoSuggestionsPanel()}
        ${aiReviewAnalysisPanel()}
        ${aiCustomerInsightsPanel()}
        ${aiContentGeneratorPanel()}
      </section>`
  },
  orders: {
    eyebrow: "Order operations",
    title: "Orders",
    html: `
      <section class="page-grid">
        ${metric("Orders today", "9,842", "+22.1%")}
        ${metric("Fulfilled", "91.4%", "on-time SLA")}
        ${metric("Exceptions", "128", "AI triaged")}
      </section>
      <section class="content-grid">
        ${orderKanbanPanel()}
        ${orderTimelinePanel()}
        ${customerNotesPanel()}
        ${fraudDetectionPanel()}
        ${invoicePreviewPanel()}
        ${shippingLabelPanel()}
        ${deliveryTrackingPanel()}
        ${refundTimelinePanel()}
      </section>`
  },
  analytics: {
    eyebrow: "Executive intelligence",
    title: "Analytics",
    html: `
      <section class="page-grid">
        ${metric("Revenue tracked", "Rs 4.82Cr", "+31.2%")}
        ${metric("Conversion rate", "5.8%", "+0.9 pts")}
        ${metric("Funnel drop-off", "18.4%", "-6.2 pts")}
        ${metric("AI growth lift", "Rs 38.6L", "next 30 days")}
      </section>
      <section class="content-grid">
        ${aiGrowthInsightsPanel()}
        ${productPerformancePanel()}
        ${categoryPerformancePanel()}
        ${funnelAnalyticsPanel()}
        ${conversionTrackingPanel()}
        ${deviceAnalyticsPanel()}
        ${locationAnalyticsPanel()}
        ${customerJourneyVisualizationPanel()}
      </section>`
  },
  marketing: {
    eyebrow: "Growth engine",
    title: "Marketing",
    html: `
      <section class="panel">
        <div class="panel-header"><div><span class="eyebrow">Campaign studio</span><h3>AI Marketing Calendar</h3></div><button class="primary-button">New Campaign</button></div>
        <div class="automation-lanes">
          ${workflow("Holi Essentials Drop", "Mumbai and Pune", "Active")}
          ${workflow("Beauty Creator Week", "Delhi NCR", "Draft")}
          ${workflow("Dormant Buyer Winback", "42,180 customers", "Ready")}
          ${workflow("Premium Grocery Bundle", "High margin cohort", "Active")}
        </div>
      </section>`
  },
  coupons: {
    eyebrow: "Promotions",
    title: "Coupons",
    html: `<section class="panel"><div class="panel-header"><div><span class="eyebrow">Offer control</span><h3>Coupon Studio</h3></div><button class="primary-button">Create Coupon</button></div><div class="data-table">
      ${tableRow(["HG-FIRST100", "New buyers", "18,420 redemptions", "Active"])}
      ${tableRow(["VIP-FESTIVE", "High LTV", "4,812 redemptions", "Active"])}
      ${tableRow(["SAVE-MORE", "Cart recovery", "9.8% uplift", "Testing"])}
    </div></section>`
  },
  delivery: {
    eyebrow: "Logistics command",
    title: "Delivery",
    html: `
      <section class="page-grid">
        ${metric("On-time SLA", "91.4%", "+3.2 pts")}
        ${metric("Active riders", "7,812", "live")}
        ${metric("Avg. delivery", "28 min", "-4 min")}
        ${metric("Failed attempts", "312", "-18% today")}
      </section>
      <section class="content-grid">
        ${deliveryDashboardPanel()}
        ${routeOptimizationPanel()}
        ${deliveryHeatmapPanel()}
        ${driverAssignmentPanel()}
        ${successRatePanel()}
        ${failedDeliveryReportsPanel()}
        ${deliveryTimelinePanel()}
      </section>`
  },
  customers: {
    eyebrow: "Customer intelligence",
    title: "Customers",
    html: `
      <section class="page-grid">
        ${metric("Known customers", "12.8L", "+41k this month")}
        ${metric("Repeat rate", "38.2%", "+6.1 pts")}
        ${metric("VIP cohorts", "24", "auto-updating")}
        ${metric("Avg. CLV", "Rs 18.4k", "+16.8% forecast")}
      </section>
      <section class="content-grid">
        ${customerProfilesPanel()}
        ${vipCustomersPanel()}
        ${customerSegmentsPanel()}
        ${loyaltyPanel()}
        ${purchaseHistoryPanel()}
        ${clvPanel()}
        ${aiCustomerScorePanel()}
        ${customerJourneyPanel()}
      </section>`
  },
  settings: {
    eyebrow: "Workspace control",
    title: "Settings",
    html: `
      <section class="panel settings-panel">
        <div><span class="eyebrow">Workspace</span><h3>Presentation Controls</h3><p class="page-copy">Static prototype mode is enabled. All data is demo-only and safe for client walkthroughs.</p></div>
        <label class="setting-row"><span>AI recommendations</span><input type="checkbox" checked /></label>
        <label class="setting-row"><span>Investor metrics</span><input type="checkbox" checked /></label>
        <label class="setting-row"><span>Demo watermark</span><input type="checkbox" /></label>
      </section>`
  },
  security: {
    eyebrow: "Trust center",
    title: "Security",
    html: `
      <section class="page-grid">
        ${metric("Risk score", "A+", "enterprise ready")}
        ${metric("Active sessions", "128", "12 privileged")}
        ${metric("Events logged", "42k", "this week")}
        ${metric("Security alerts", "7", "2 high priority")}
      </section>
      <section class="content-grid">
        ${loginHistoryPanel()}
        ${deviceTrackingPanel()}
        ${sessionManagementPanel()}
        ${ipMonitoringPanel()}
        ${adminActivityLogsPanel()}
        ${securityAlertsPanel()}
        ${twoFactorPanel()}
      </section>`
  }
};

const notifications = [
  "FreshKart Mumbai crossed Rs 40L GMV today.",
  "AI flagged 18 low-stock SKUs in West zone.",
  "Beauty bundle campaign is outperforming by 2.4x.",
  "Support automation resolved 7,812 chats."
];

function metric(label, value, note) {
  return `<article class="metric-card"><span>${label}</span><strong data-count="${value}">${value}</strong><small>${note}</small></article>`;
}

function previewFeature(label) {
  return `<span>${label}</span>`;
}

function phoneMockup(title, badge, content) {
  return `<article class="phone-mockup">
    <div class="phone-shell">
      <div class="phone-top"><span>${badge}</span><b></b><i></i></div>
      <div class="phone-screen">${content}</div>
      <div class="phone-bottom"></div>
    </div>
    <h3>${title}</h3>
  </article>`;
}

function miniProduct(name, price) {
  return `<div><strong>${name}</strong><span>${price}</span></div>`;
}

function tinyTile(label) {
  return `<span>${label}</span>`;
}

function listingCard(name, tag) {
  return `<div><strong>${name}</strong><span>${tag}</span></div>`;
}

function cartLine(name, price) {
  return `<div class="cart-line"><span>${name}</span><strong>${price}</strong></div>`;
}

function wishlistLine(name, note) {
  return `<div class="wishlist-line"><span>${name}</span><small>${note}</small></div>`;
}

function growthPanel() {
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">Revenue intelligence</span><h3>AI Growth Map</h3></div><div class="segmented"><button class="active">Today</button><button>Week</button><button>Month</button></div></div>
    <div class="chart">${[42, 66, 51, 78, 62, 92, 74, 88, 69, 96].map((h) => `<div style="height:${h}%"></div>`).join("")}</div>
    <div class="recommendation"><strong>AI recommendation</strong><p>Bundle festive staples with premium snacks in Mumbai and Pune. Expected uplift: Rs 9.6L in 72 hours.</p><button class="secondary-button" data-view="aiCenter">Approve Play</button></div>
  </article>`;
}

function forecastPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Sales forecast</span><h3>Next 7 Days</h3></div><span class="badge">AI</span></div>
    <div class="forecast-value">Rs 1.18Cr</div>
    <p class="page-copy">Predicted revenue with 87% confidence. Weekend grocery demand is expected to peak in Mumbai and Pune.</p>
    <div class="sparkline">${[32, 44, 39, 58, 71, 80, 92].map((h) => `<span style="height:${h}%"></span>`).join("")}</div>
  </article>`;
}

function progressPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Revenue goal</span><h3>Monthly Target</h3></div><strong>78%</strong></div>
    <div class="progress-track"><span style="width:78%"></span></div>
    <p class="page-copy">Rs 4.82Cr achieved against Rs 6.2Cr monthly target. AI recommends campaign acceleration in three metro clusters.</p>
  </article>`;
}

function productListPanel(title, eyebrow, rows) {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">${eyebrow}</span><h3>${title}</h3></div></div>
    <div class="mini-list">${rows.map(([name, value], index) => `<div class="mini-row"><span class="rank">${index + 1}</span><strong>${name}</strong><span class="badge">${value}</span></div>`).join("")}</div>
  </article>`;
}

function satisfactionPanel() {
  return `<article class="panel score-panel">
    <div class="panel-header"><div><span class="eyebrow">Customer experience</span><h3>Satisfaction Score</h3></div></div>
    <div class="score-ring cyan"><strong>4.8</strong><span>/5</span></div>
    <p class="page-copy">Based on 18,420 recent ratings, support conversations, and delivery feedback.</p>
  </article>`;
}

function visitorPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Live visitor tracking</span><h3>Traffic by City</h3></div><span class="live-dot">Live</span></div>
    <div class="visitor-bars">
      ${[["Mumbai", 92], ["Delhi", 74], ["Pune", 63], ["Jaipur", 48]].map(([city, value]) => `<div><span>${city}</span><b style="width:${value}%"></b><small>${value}%</small></div>`).join("")}
    </div>
  </article>`;
}

function suggestionPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Smart suggestions</span><h3>AI Next Moves</h3></div></div>
    <div class="mini-list">
      <div class="mini-row"><span class="dot blue"></span><strong>Launch premium snack bundle in Mumbai</strong><small>Rs 9.6L upside</small></div>
      <div class="mini-row"><span class="dot"></span><strong>Increase bids for beauty subscriptions</strong><small>2.4x ROAS</small></div>
      <div class="mini-row"><span class="dot amber"></span><strong>Transfer dairy inventory to Pune</strong><small>36 hrs risk</small></div>
    </div>
  </article>`;
}

function activityPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Recent activity</span><h3>Operating Feed</h3></div></div>
    <div class="mini-list">
      <div class="mini-row"><span class="dot"></span><strong>AI approved 312 product SEO updates</strong><small>2 min ago</small></div>
      <div class="mini-row"><span class="dot blue"></span><strong>FreshKart Mumbai crossed Rs 40L GMV</strong><small>8 min ago</small></div>
      <div class="mini-row"><span class="dot amber"></span><strong>Stock risk opened for 18 SKUs</strong><small>14 min ago</small></div>
      <div class="mini-row"><span class="dot"></span><strong>VIP coupon campaign generated 4,812 orders</strong><small>26 min ago</small></div>
    </div>
  </article>`;
}

function quickActionsPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Quick actions</span><h3>Launch Control</h3></div></div>
    <div class="quick-actions">
      <button class="primary-button" data-view="products">Add Product</button>
      <button class="secondary-button" data-view="marketing">Create Campaign</button>
      <button class="secondary-button" data-view="coupons">Issue Coupon</button>
      <button class="ghost-button" data-view="aiCenter">Ask AI</button>
    </div>
  </article>`;
}

function heatmapPanel() {
  const cells = [20, 42, 64, 82, 58, 34, 76, 91, 47, 69, 88, 53, 28, 73, 96, 61, 39, 84, 72, 44, 67, 92, 55, 31];
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">Heatmap visualization</span><h3>Purchase Intent by Hour</h3></div><span class="badge">Live</span></div>
    <div class="heatmap">${cells.map((value) => `<span style="--heat:${value}%"></span>`).join("")}</div>
  </article>`;
}

function miniGraphPanel(title, eyebrow, values) {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">${eyebrow}</span><h3>${title}</h3></div></div>
    <div class="mini-graph">${values.map((value) => `<span style="height:${value}%"></span>`).join("")}</div>
  </article>`;
}

function aiGrowthInsightsPanel() {
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">AI growth insights</span><h3>Growth Command Map</h3></div><span class="badge">AI</span></div>
    <div class="chart">${[54, 68, 61, 82, 74, 91, 79, 96, 88, 99].map((h) => `<div style="height:${h}%"></div>`).join("")}</div>
    <div class="recommendation"><strong>AI insight</strong><p>Shift Rs 6.5L into Mumbai grocery bundles and Delhi beauty subscriptions. Predicted uplift: Rs 38.6L over 30 days.</p><button class="secondary-button" data-view="marketing">Create Plan</button></div>
  </article>`;
}

function productPerformancePanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Product performance</span><h3>SKU Leaders</h3></div></div>
    <div class="mini-list">
      ${analyticsRow("Royal Basmati Reserve", "Rs 38.2L revenue", "+18%")}
      ${analyticsRow("Glow Serum Combo", "Rs 31.6L revenue", "+24%")}
      ${analyticsRow("Daily Staples Pack", "Rs 24.9L revenue", "+14%")}
      ${analyticsRow("Festival Gift Hamper", "Rs 18.4L revenue", "+31%")}
    </div>
  </article>`;
}

function categoryPerformancePanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Category performance</span><h3>GMV Mix</h3></div></div>
    <div class="category-mix">
      ${mixBar("Grocery", 92, "Rs 1.42Cr")}
      ${mixBar("Beauty", 74, "Rs 84.6L")}
      ${mixBar("Fashion", 58, "Rs 62.1L")}
      ${mixBar("Home", 46, "Rs 41.8L")}
    </div>
  </article>`;
}

function funnelAnalyticsPanel() {
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">Funnel analytics</span><h3>Shopper Funnel</h3></div><span class="badge">Live</span></div>
    <div class="funnel-steps">
      ${funnelStep("Visitors", "184k", 100)}
      ${funnelStep("Product views", "92k", 76)}
      ${funnelStep("Add to cart", "28k", 48)}
      ${funnelStep("Checkout", "14k", 31)}
      ${funnelStep("Orders", "9.8k", 22)}
    </div>
  </article>`;
}

function conversionTrackingPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Conversion tracking</span><h3>Channel ROAS</h3></div></div>
    <div class="mini-list">
      ${analyticsRow("WhatsApp retargeting", "8.4% conversion", "4.8x")}
      ${analyticsRow("Instagram creators", "6.9% conversion", "3.6x")}
      ${analyticsRow("Search ads", "4.8% conversion", "2.9x")}
      ${analyticsRow("Organic storefront", "3.7% conversion", "2.1x")}
    </div>
  </article>`;
}

function deviceAnalyticsPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Device analytics</span><h3>Checkout Devices</h3></div></div>
    <div class="device-grid">
      ${deviceCard("Mobile", "72%", "+9 pts")}
      ${deviceCard("Desktop", "18%", "-3 pts")}
      ${deviceCard("Tablet", "7%", "+1 pt")}
      ${deviceCard("App WebView", "3%", "new")}
    </div>
  </article>`;
}

function locationAnalyticsPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Location analytics</span><h3>City Demand</h3></div><span class="live-dot">Live</span></div>
    <div class="visitor-bars">
      ${[["Mumbai", 96], ["Delhi", 81], ["Pune", 67], ["Jaipur", 52], ["Bengaluru", 44]].map(([city, value]) => `<div><span>${city}</span><b style="width:${value}%"></b><small>${value}%</small></div>`).join("")}
    </div>
  </article>`;
}

function customerJourneyVisualizationPanel() {
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">Customer journey visualization</span><h3>High Intent Path</h3></div></div>
    <div class="journey-map">
      ${journeyNode("Discovery", "Instagram creator ad", "18.4k users")}
      ${journeyNode("Consideration", "Viewed 3 products", "9.2k users")}
      ${journeyNode("Cart", "Bundle added", "2.8k users")}
      ${journeyNode("Checkout", "UPI payment", "1.4k users")}
      ${journeyNode("Loyalty", "Repeat offer sent", "842 users")}
    </div>
  </article>`;
}

function analyticsRow(name, detail, value) {
  return `<div class="mini-row"><span class="dot blue"></span><strong>${name}</strong><small>${detail}</small><span class="badge">${value}</span></div>`;
}

function mixBar(name, value, amount) {
  return `<div><strong>${name}</strong><span><b style="width:${value}%"></b></span><small>${amount}</small></div>`;
}

function funnelStep(name, value, width) {
  return `<div style="--step:${width}%"><strong>${name}</strong><span>${value}</span></div>`;
}

function deviceCard(name, value, note) {
  return `<div><strong>${value}</strong><span>${name}</span><small>${note}</small></div>`;
}

function journeyNode(stage, detail, count) {
  return `<div><span>${stage}</span><strong>${detail}</strong><small>${count}</small></div>`;
}

function pulseRows() {
  return `<div class="mini-list">${[
    "Quick commerce demand moving 18% faster",
    "Dairy staples low in 14 clusters",
    "Creator campaigns outperforming by 2.4x",
    "AI handling 7,812 chats today"
  ].map((x) => `<div class="mini-row"><span class="dot"></span><strong>${x}</strong><small>Live signal</small></div>`).join("")}</div>`;
}

function storeRows() {
  return `<div class="mini-list">${["FreshKart Mumbai", "StyleLane Jaipur", "GlowHouse Delhi", "DailyNest Pune"].map((x) => `<div class="mini-row"><strong>${x}</strong><small>Regional leader</small><span class="badge">Live</span></div>`).join("")}</div>`;
}

function actionRows() {
  return `<div class="mini-list">${["Raise price for premium basmati rice", "Create Holi-ready storefront collection", "Reorder fast-moving SKUs", "Send win-back offers"].map((x) => `<div class="mini-row"><strong>${x}</strong><small>Ready for approval</small><span class="badge">AI</span></div>`).join("")}</div>`;
}

function vendorDashboardPanel() {
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">Vendor dashboard</span><h3>Seller Command Table</h3></div><button class="primary-button">Add Vendor</button></div>
    <div class="data-table">
      ${tableRow(["FreshKart Mumbai", "Grocery", "Rs 42.8L", "Verified"])}
      ${tableRow(["StyleLane Jaipur", "Fashion", "Rs 31.4L", "Scaling"])}
      ${tableRow(["GlowHouse Delhi", "Beauty", "Rs 26.1L", "Campaign live"])}
      ${tableRow(["DailyNest Pune", "Home", "Rs 19.7L", "Needs stock"])}
    </div>
  </article>`;
}

function vendorEarningsPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Vendor earnings</span><h3>Payout Forecast</h3></div><span class="badge">Live</span></div>
    <div class="forecast-value">Rs 6.8Cr</div>
    <p class="page-copy">Projected vendor payouts after commissions, refunds, and logistics deductions.</p>
    <div class="sparkline">${[44, 52, 61, 58, 72, 86, 94].map((h) => `<span style="height:${h}%"></span>`).join("")}</div>
  </article>`;
}

function commissionSettingsPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Commission settings</span><h3>Category Rules</h3></div><button class="secondary-button compact">Edit</button></div>
    <div class="commission-list">
      ${commissionRule("Grocery", "8%", "High volume")}
      ${commissionRule("Beauty", "14%", "Premium margin")}
      ${commissionRule("Fashion", "16%", "Creator led")}
      ${commissionRule("Home", "12%", "Standard")}
    </div>
  </article>`;
}

function vendorVerificationPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Vendor verification</span><h3>KYC Queue</h3></div><span class="badge warn">128</span></div>
    <div class="mini-list">
      ${verificationRow("Aarohi Organics", "GST pending", "Review")}
      ${verificationRow("Urban Glow Co", "Bank matched", "Approve")}
      ${verificationRow("Jaipur Looms", "Address check", "Verify")}
      ${verificationRow("Daily Pantry", "Documents complete", "Approve")}
    </div>
  </article>`;
}

function vendorAnalyticsPanel() {
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">Vendor analytics</span><h3>Marketplace Growth Mix</h3></div><span class="badge">AI</span></div>
    <div class="category-mix">
      ${mixBar("FreshKart", 92, "Rs 42.8L")}
      ${mixBar("StyleLane", 76, "Rs 31.4L")}
      ${mixBar("GlowHouse", 64, "Rs 26.1L")}
      ${mixBar("DailyNest", 48, "Rs 19.7L")}
    </div>
    <div class="recommendation"><strong>AI insight</strong><p>Move top beauty sellers to premium placement and reduce commission by 1% for vendors with SLA above 95%.</p><button class="secondary-button" data-view="aiCenter">Review</button></div>
  </article>`;
}

function vendorPerformanceScoresPanel() {
  return `<article class="panel score-panel">
    <div class="panel-header"><div><span class="eyebrow">Vendor performance scores</span><h3>Seller Health</h3></div><span class="badge">Strong</span></div>
    <div class="score-ring"><strong>89</strong><span>/100</span></div>
    <p class="page-copy">Scores combine fulfillment SLA, cancellation rate, customer rating, margin quality, and dispute history.</p>
    <div class="score-factors"><span>SLA 95%</span><span>Rating 4.7</span><span>Disputes low</span></div>
  </article>`;
}

function commissionRule(category, rate, detail) {
  return `<div><strong>${category}</strong><span>${rate}</span><small>${detail}</small></div>`;
}

function verificationRow(name, detail, action) {
  return `<div class="mini-row"><span class="dot amber"></span><strong>${name}</strong><small>${detail}</small><span class="badge">${action}</span></div>`;
}

function aiShoppingAssistantPanel() {
  return `<article class="ai-card ai-card-wide">
    <div class="ai-card-head"><div><span class="eyebrow">AI shopping assistant</span><h3>Conversational Buyer Agent</h3></div><span class="badge">Live</span></div>
    <div class="ai-chat-preview">
      <p><strong>Shopper</strong><span>Need premium grocery staples for a family weekend.</span></p>
      <p><strong>AI</strong><span>Recommended basmati, ghee, snacks, and subscription refill. Expected cart: Rs 2,840.</span></p>
    </div>
    <div class="ai-signal-row"><span>Intent high</span><span>Bundle ready</span><span>WhatsApp handoff</span></div>
  </article>`;
}

function aiSalesForecastPanel() {
  return `<article class="ai-card">
    <div class="ai-card-head"><div><span class="eyebrow">AI sales forecast</span><h3>Next 7 Days</h3></div><span class="badge">87%</span></div>
    <div class="forecast-value">Rs 1.18Cr</div>
    <p class="page-copy">Weekend grocery and beauty subscriptions are forecast to lead revenue velocity.</p>
    <div class="mini-graph">${[42, 55, 51, 68, 78, 86, 96].map((h) => `<span style="height:${h}%"></span>`).join("")}</div>
  </article>`;
}

function aiDemandPredictionPanel() {
  return `<article class="ai-card">
    <div class="ai-card-head"><div><span class="eyebrow">AI demand prediction</span><h3>Demand Radar</h3></div><span class="live-dot">Live</span></div>
    <div class="demand-radar"><span></span><b></b><i></i></div>
    <p class="page-copy">Mumbai staples, Delhi skincare, and Pune dairy demand are moving above baseline.</p>
  </article>`;
}

function aiProductRecommendationsPanel() {
  return `<article class="ai-card">
    <div class="ai-card-head"><div><span class="eyebrow">AI product recommendations</span><h3>Recommendation Engine</h3></div></div>
    <div class="mini-list">
      ${aiCommandRow("Basmati + Ghee + Masala", "21% AOV lift", "Bundle")}
      ${aiCommandRow("Glow Serum Pro Kit", "2.4x repeat rate", "Upsell")}
      ${aiCommandRow("Snack Box add-on", "Rs 9.6L upside", "Cross-sell")}
    </div>
  </article>`;
}

function aiMarketingSuggestionsPanel() {
  return `<article class="ai-card ai-card-wide">
    <div class="ai-card-head"><div><span class="eyebrow">AI marketing suggestions</span><h3>Campaign Autopilot</h3></div><button class="secondary-button compact">Launch</button></div>
    <div class="ai-campaign-grid">
      ${aiCampaign("VIP festive winback", "42,180 customers", "Rs 18.4L uplift")}
      ${aiCampaign("Beauty creator week", "Delhi NCR", "3.6x ROAS")}
      ${aiCampaign("Staples subscription push", "Mumbai and Pune", "28% repeat")}
    </div>
  </article>`;
}

function aiSeoSuggestionsPanel() {
  return `<article class="ai-card">
    <div class="ai-card-head"><div><span class="eyebrow">AI SEO suggestions</span><h3>Search Optimizer</h3></div><span class="badge">92%</span></div>
    <div class="seo-suggestion-box">
      <strong>Premium aged basmati rice for biryani</strong>
      <span>Keywords: aged rice, long grain, premium grocery</span>
      <small>Meta score +14 pts after rewrite</small>
    </div>
  </article>`;
}

function aiReviewAnalysisPanel() {
  return `<article class="ai-card">
    <div class="ai-card-head"><div><span class="eyebrow">AI review analysis</span><h3>Sentiment Pulse</h3></div><span class="badge">4.8/5</span></div>
    <div class="sentiment-bars">
      ${sentimentBar("Positive", 88)}
      ${sentimentBar("Neutral", 9)}
      ${sentimentBar("Negative", 3)}
    </div>
    <p class="page-copy">Customers praise delivery speed and product freshness; packaging feedback is trending up.</p>
  </article>`;
}

function aiCustomerInsightsPanel() {
  return `<article class="ai-card">
    <div class="ai-card-head"><div><span class="eyebrow">AI customer insights</span><h3>Intent Clusters</h3></div></div>
    <div class="score-ring"><strong>91</strong><span>/100</span></div>
    <div class="score-factors"><span>VIP repeat</span><span>Cart intent</span><span>Churn risk low</span></div>
  </article>`;
}

function aiContentGeneratorPanel() {
  return `<article class="ai-card ai-card-wide">
    <div class="ai-card-head"><div><span class="eyebrow">AI content generator</span><h3>Creative Studio</h3></div><button class="primary-button compact">Generate</button></div>
    <textarea class="ai-textarea" readonly>Generated campaign copy:
Premium pantry staples, delivered fast. Build your weekend grocery box with aged basmati, pure ghee, masala blends, and chef-picked snacks.</textarea>
    <div class="ai-signal-row"><span>Product copy</span><span>Ad captions</span><span>SEO titles</span><span>WhatsApp scripts</span></div>
  </article>`;
}

function aiCommandRow(name, detail, action) {
  return `<div class="mini-row"><span class="dot blue"></span><strong>${name}</strong><small>${detail}</small><span class="badge">${action}</span></div>`;
}

function aiCampaign(name, audience, result) {
  return `<div><strong>${name}</strong><span>${audience}</span><small>${result}</small></div>`;
}

function sentimentBar(name, value) {
  return `<div><strong>${name}</strong><span><b style="width:${value}%"></b></span><small>${value}%</small></div>`;
}

function loginHistoryPanel() {
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">Login history</span><h3>Recent Access</h3></div><span class="badge">Audited</span></div>
    <div class="data-table">
      ${tableRow(["Sagar Kumar", "Mumbai, IN", "Chrome", "2 min ago"])}
      ${tableRow(["Ops Admin", "Delhi, IN", "Edge", "28 min ago"])}
      ${tableRow(["Finance Lead", "Pune, IN", "Safari", "1 hr ago"])}
      ${tableRow(["Support Manager", "Jaipur, IN", "Chrome", "3 hrs ago"])}
    </div>
  </article>`;
}

function deviceTrackingPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Device tracking</span><h3>Trusted Devices</h3></div><button class="secondary-button compact">Review</button></div>
    <div class="security-card-grid">
      ${securityDevice("MacBook Pro", "Sagar", "Trusted")}
      ${securityDevice("Windows Admin", "Ops", "2FA")}
      ${securityDevice("iPhone 15", "Finance", "Trusted")}
      ${securityDevice("Unknown Laptop", "Blocked", "Flagged")}
    </div>
  </article>`;
}

function sessionManagementPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Session management</span><h3>Live Sessions</h3></div><button class="primary-button compact">Revoke</button></div>
    <div class="mini-list">
      ${securityRow("Founder workspace", "Active for 42 min", "Keep")}
      ${securityRow("Inventory admin", "Idle for 18 min", "Monitor")}
      ${securityRow("Support desk", "Active for 9 min", "Keep")}
      ${securityRow("Legacy token", "Inactive 14 days", "Revoke")}
    </div>
  </article>`;
}

function ipMonitoringPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">IP monitoring</span><h3>Network Watch</h3></div><span class="live-dot">Live</span></div>
    <div class="visitor-bars">
      ${[["Mumbai", 92], ["Delhi", 68], ["Pune", 54], ["Unknown", 18]].map(([city, value]) => `<div><span>${city}</span><b style="width:${value}%"></b><small>${value}%</small></div>`).join("")}
    </div>
  </article>`;
}

function adminActivityLogsPanel() {
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">Admin activity logs</span><h3>Privileged Actions</h3></div><button class="secondary-button compact">Export</button></div>
    <div class="data-table">
      ${tableRow(["Pricing rule changed", "Sagar Kumar", "Beauty", "12 min ago"])}
      ${tableRow(["Vendor payout approved", "Finance Lead", "Marketplace", "32 min ago"])}
      ${tableRow(["Refund policy edited", "Ops Admin", "Orders", "1 hr ago"])}
      ${tableRow(["API key rotated", "Security Bot", "System", "2 hrs ago"])}
    </div>
  </article>`;
}

function securityAlertsPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Security alerts</span><h3>Alert Queue</h3></div><span class="badge warn">7</span></div>
    <div class="mini-list">
      ${alertRow("Impossible travel attempt", "Blocked login from unusual region", "High")}
      ${alertRow("Multiple failed passwords", "Ops Admin account", "High")}
      ${alertRow("New device enrolled", "Finance Lead", "Medium")}
      ${alertRow("Export threshold reached", "Customer CSV", "Review")}
    </div>
  </article>`;
}

function twoFactorPanel() {
  return `<article class="panel score-panel">
    <div class="panel-header"><div><span class="eyebrow">Two factor authentication</span><h3>2FA Coverage</h3></div><span class="badge">Enabled</span></div>
    <div class="score-ring cyan"><strong>96</strong><span>%</span></div>
    <p class="page-copy">Admins and finance roles require authenticator approval. SMS fallback is disabled for privileged users.</p>
    <div class="security-toggles">
      <label class="setting-row"><span>Require 2FA for admins</span><input type="checkbox" checked /></label>
      <label class="setting-row"><span>Enforce step-up for exports</span><input type="checkbox" checked /></label>
      <label class="setting-row"><span>Disable SMS fallback</span><input type="checkbox" checked /></label>
    </div>
  </article>`;
}

function securityDevice(name, owner, status) {
  return `<div><strong>${name}</strong><span>${owner}</span><small>${status}</small></div>`;
}

function securityRow(name, detail, action) {
  return `<div class="mini-row"><span class="dot blue"></span><strong>${name}</strong><small>${detail}</small><span class="badge">${action}</span></div>`;
}

function alertRow(name, detail, level) {
  return `<div class="mini-row"><span class="dot amber"></span><strong>${name}</strong><small>${detail}</small><span class="badge warn">${level}</span></div>`;
}

function listPanel(title, eyebrow, content, wide = false) {
  return `<article class="panel ${wide ? "wide" : ""}"><div class="panel-header"><div><span class="eyebrow">${eyebrow}</span><h3>${title}</h3></div></div>${content}</article>`;
}

function tableRow(cells) {
  return `<div class="table-row">${cells.map((cell) => `<span>${cell}</span>`).join("")}<button class="secondary-button compact">Open</button></div>`;
}

function productCard(name, detail, price, category = "AI Product") {
  return `<article class="product-card rich-product">
    <button class="product-thumb" data-open-product="${name}" aria-label="Open ${name} preview"><span>${category}</span></button>
    <div class="product-card-body">
      <span class="eyebrow">${price}</span>
      <h3>${name}</h3>
      <p>${detail}</p>
      <div class="variant-dots"><span style="background:#F8FAFC"></span><span style="background:#7C3AED"></span><span style="background:#06B6D4"></span><span style="background:#111827"></span></div>
      <button class="secondary-button" data-open-product="${name}">View Details</button>
    </div>
  </article>`;
}

function productListRow(name, category, variants, price, stock) {
  return `<div class="product-list-row">
    <button class="list-thumb" data-open-product="${name}"></button>
    <div><strong>${name}</strong><small>${category}</small></div>
    <span>${variants}</span>
    <span>${price}</span>
    <span>${stock}</span>
    <button class="secondary-button compact" data-open-product="${name}">Open</button>
  </div>`;
}

function aiGeneratorPanel(title, copy, action) {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">AI studio</span><h3>${title}</h3></div><span class="badge">AI</span></div>
    <p class="page-copy">${copy}</p>
    <textarea class="ai-textarea" readonly>Input: Royal Basmati Reserve, premium aged rice, metro grocery customers, high-repeat segment.</textarea>
    <button class="primary-button">${action}</button>
  </article>`;
}

function productMediaPanel() {
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">Product media</span><h3>Video and 360 Preview</h3></div></div>
    <div class="media-preview-grid">
      <div class="video-preview"><span>Product Video Preview</span><button class="primary-button compact">Play Demo</button></div>
      <div class="viewer-360"><span>360 Product Viewer Placeholder</span><div class="orbit-ring"></div></div>
    </div>
  </article>`;
}

function productBundlePanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Bundles</span><h3>Frequently Bought Together</h3></div></div>
    <div class="mini-list">
      <div class="mini-row"><span class="rank">1</span><strong>Basmati + Ghee + Masala</strong><span class="badge">Rs 899</span></div>
      <div class="mini-row"><span class="rank">2</span><strong>Glow Serum + Cleanser</strong><span class="badge">Rs 1,299</span></div>
      <div class="mini-row"><span class="rank">3</span><strong>Staples Pack + Snack Box</strong><span class="badge">Rs 1,749</span></div>
    </div>
  </article>`;
}

function suggestionShelf(title, rows) {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Revenue suggestions</span><h3>${title}</h3></div></div>
    <div class="mini-list">${rows.map(([name, detail]) => `<div class="mini-row"><span class="dot blue"></span><strong>${name}</strong><small>${detail}</small></div>`).join("")}</div>
  </article>`;
}

function productDetailModal() {
  return `<section class="product-modal" id="productModal" aria-hidden="true">
    <div class="product-modal-card">
      <div class="panel-header"><div><span class="eyebrow">Product detail modal</span><h3 id="modalProductName">Royal Basmati Reserve</h3></div><button class="icon-button" id="closeProductModal">CL</button></div>
      <div class="product-detail-layout">
        <div>
          <div class="modal-thumb"><span>Thumbnail Preview</span></div>
          <div class="thumbnail-strip"><button></button><button></button><button></button><button></button></div>
        </div>
        <div class="modal-sections">
          <div><span class="eyebrow">Product variants</span><div class="chip-row"><span>500g</span><span>1kg</span><span>5kg</span><span>10kg</span></div></div>
          <div><span class="eyebrow">Color variants</span><div class="variant-dots large"><span style="background:#F8FAFC"></span><span style="background:#7C3AED"></span><span style="background:#06B6D4"></span><span style="background:#111827"></span></div></div>
          <div><span class="eyebrow">Size variants</span><div class="chip-row"><span>S</span><span>M</span><span>L</span><span>XL</span></div></div>
          <div><span class="eyebrow">Related products</span><p class="page-copy">Premium Ghee, Organic Dal, Masala Combo, Copper Storage Jar.</p></div>
          <div><span class="eyebrow">Product bundles</span><p class="page-copy">AI recommends Basmati + Ghee + Masala for a 21% AOV lift.</p></div>
        </div>
      </div>
    </div>
  </section>`;
}

function categoryCard(name, detail, icon, gmv) {
  return `<div class="category-card">
    <div class="category-icon">${icon}</div>
    <div>
      <strong>${name}</strong>
      <small>${detail}</small>
    </div>
    <span class="badge">${gmv}</span>
  </div>`;
}

function categoryBannerPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Category banners</span><h3>Campaign Banner Preview</h3></div></div>
    <div class="category-banner">
      <span>Grocery Essentials</span>
      <strong>Fresh staples delivered faster</strong>
      <button class="secondary-button compact">Edit Banner</button>
    </div>
    <div class="thumbnail-strip"><button></button><button></button><button></button><button></button></div>
  </article>`;
}

function categorySeoPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Category SEO panel</span><h3>Search Preview</h3></div><span class="badge">92%</span></div>
    <div class="seo-preview">
      <strong>Buy Grocery Essentials Online | HarGhar</strong>
      <small>harghar.ai/categories/grocery-essentials</small>
      <p>Shop fresh staples, pantry items, dairy, snacks, and household essentials with AI-personalized offers.</p>
    </div>
    <button class="primary-button">Generate SEO</button>
  </article>`;
}

function featuredCategoriesPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Featured categories</span><h3>Homepage Shelf</h3></div></div>
    <div class="mini-list">
      <div class="mini-row"><span class="rank">1</span><strong>Grocery Essentials</strong><span class="badge">Featured</span></div>
      <div class="mini-row"><span class="rank">2</span><strong>Beauty and Wellness</strong><span class="badge">Featured</span></div>
      <div class="mini-row"><span class="rank">3</span><strong>Festival Gift Hampers</strong><span class="badge">Seasonal</span></div>
    </div>
  </article>`;
}

function dragDropPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Drag drop mockup</span><h3>Menu Ordering</h3></div></div>
    <div class="drag-list">
      <div><span>::</span> Grocery Essentials</div>
      <div><span>::</span> Beauty and Wellness</div>
      <div><span>::</span> Fashion Drops</div>
      <div><span>::</span> Home Upgrades</div>
    </div>
  </article>`;
}

function megaMenuPanel() {
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">Mega menu preview</span><h3>Customer Navigation</h3></div><button class="secondary-button compact">Preview Storefront</button></div>
    <div class="mega-menu-preview">
      <div><strong>Grocery</strong><span>Rice and grains</span><span>Dairy</span><span>Snacks</span><span>Household</span></div>
      <div><strong>Beauty</strong><span>Skincare</span><span>Haircare</span><span>Combos</span><span>Wellness</span></div>
      <div><strong>Fashion</strong><span>New drops</span><span>Creator edits</span><span>Accessories</span><span>Festive</span></div>
      <div class="mega-feature"><span>AI Pick</span><strong>Festival Gift Hampers</strong><small>Trending in 12 cities</small></div>
    </div>
  </article>`;
}

function stockOverviewPanel() {
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">Stock overview</span><h3>Inventory Command Table</h3></div><button class="primary-button">Approve Reorders</button></div>
    <div class="inventory-toolbar"><button class="secondary-button compact">Select All</button><button class="secondary-button compact">Transfer</button><button class="secondary-button compact">Reorder</button><button class="ghost-button compact">Export CSV</button></div>
    <div class="data-table">
      ${tableRow(["Basmati Rice 5kg", "Mumbai WH-01", "18 hrs left", "Reorder"])}
      ${tableRow(["Glow Serum Combo", "Delhi WH-04", "2 days left", "Transfer"])}
      ${tableRow(["Daily Staples Pack", "Pune WH-02", "36 hrs left", "Reorder"])}
      ${tableRow(["Festival Gift Hamper", "Jaipur WH-03", "Healthy", "Monitor"])}
    </div>
  </article>`;
}

function lowStockPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Low stock alerts</span><h3>Risk Queue</h3></div><span class="badge warn">128</span></div>
    <div class="mini-list">
      <div class="mini-row"><span class="dot amber"></span><strong>Dairy staples</strong><small>14 clusters below 2 days</small></div>
      <div class="mini-row"><span class="dot amber"></span><strong>Glow serum combo</strong><small>Delhi demand spike</small></div>
      <div class="mini-row"><span class="dot blue"></span><strong>Premium basmati</strong><small>Reorder suggested</small></div>
    </div>
  </article>`;
}

function warehousePanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Warehouse assignment</span><h3>Fulfillment Routing</h3></div></div>
    <div class="warehouse-map">
      <div><strong>Mumbai WH-01</strong><span>42% load</span></div>
      <div><strong>Delhi WH-04</strong><span>71% load</span></div>
      <div><strong>Pune WH-02</strong><span>58% load</span></div>
      <div><strong>Jaipur WH-03</strong><span>36% load</span></div>
    </div>
  </article>`;
}

function stockHistoryPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Stock history</span><h3>Movement Trend</h3></div></div>
    <div class="mini-graph">${[48, 52, 44, 61, 57, 72, 68, 81, 74, 88].map((value) => `<span style="height:${value}%"></span>`).join("")}</div>
  </article>`;
}

function qrPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">QR code placeholder</span><h3>SKU Scan Preview</h3></div></div>
    <div class="qr-placeholder">${Array.from({ length: 49 }).map((_, index) => `<span class="${index % 3 === 0 || index % 7 === 0 ? "dark" : ""}"></span>`).join("")}</div>
    <p class="page-copy">Static QR placeholder for SKU receiving, picking, and warehouse audit flows.</p>
  </article>`;
}

function bulkInventoryPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Bulk actions toolbar</span><h3>Batch Operations</h3></div></div>
    <div class="quick-actions">
      <button class="primary-button">Bulk Reorder</button>
      <button class="secondary-button">Assign Warehouse</button>
      <button class="secondary-button">Update Threshold</button>
      <button class="ghost-button">Print Labels</button>
    </div>
  </article>`;
}

function inventoryFiltersPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Search filters</span><h3>Find Inventory</h3></div></div>
    <div class="filter-grid">
      <label><span>SKU or product</span><input value="Basmati Rice" /></label>
      <label><span>Warehouse</span><select><option>All warehouses</option><option>Mumbai WH-01</option><option>Delhi WH-04</option></select></label>
      <label><span>Status</span><select><option>Low stock</option><option>Healthy</option><option>Transfer needed</option></select></label>
      <label><span>Category</span><select><option>All categories</option><option>Grocery</option><option>Beauty</option></select></label>
    </div>
  </article>`;
}

function orderKanbanPanel() {
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">Kanban order board</span><h3>Fulfillment Flow</h3></div><button class="secondary-button compact">Auto Assign</button></div>
    <div class="kanban-board">
      ${kanbanColumn("New", ["#HG-10492 Rs 2,840", "#HG-10491 Rs 1,120"])}
      ${kanbanColumn("Packed", ["#HG-10490 Rs 4,699", "#HG-10488 Rs 899"])}
      ${kanbanColumn("Shipped", ["#HG-10487 Rs 1,749", "#HG-10486 Rs 3,180"])}
      ${kanbanColumn("Delivered", ["#HG-10485 Rs 979", "#HG-10484 Rs 2,240"])}
    </div>
  </article>`;
}

function kanbanColumn(title, cards) {
  return `<div class="kanban-column"><strong>${title}</strong>${cards.map((card) => `<div class="kanban-card"><span>${card}</span><small>AI SLA: on track</small></div>`).join("")}</div>`;
}

function orderTimelinePanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Order timeline</span><h3>#HG-10492</h3></div></div>
    ${timeline(["Order placed at 10:42 AM", "Payment captured", "Warehouse assigned", "Packed by Mumbai WH-01", "Rider pickup scheduled"])}
  </article>`;
}

function customerNotesPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Customer notes</span><h3>Buyer Context</h3></div><span class="badge">VIP</span></div>
    <div class="notes-box">Prefers evening delivery. High repeat grocery customer. Avoid substitutions for dairy products.</div>
    <button class="primary-button">Add Note</button>
  </article>`;
}

function fraudDetectionPanel() {
  return `<article class="panel score-panel">
    <div class="panel-header"><div><span class="eyebrow">Fraud detection card</span><h3>Risk Scan</h3></div><span class="badge">Low</span></div>
    <div class="score-ring cyan"><strong>12</strong><span>/100</span></div>
    <p class="page-copy">Address, device, payment velocity, and refund history are within normal range.</p>
  </article>`;
}

function invoicePreviewPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Invoice preview</span><h3>Tax Invoice</h3></div><button class="secondary-button compact">Download</button></div>
    <div class="invoice-preview">
      <strong>HarGhar Commerce Pvt Ltd</strong>
      <span>Invoice #INV-10492</span>
      <div><span>Subtotal</span><b>Rs 2,640</b></div>
      <div><span>GST</span><b>Rs 200</b></div>
      <div><span>Total</span><b>Rs 2,840</b></div>
    </div>
  </article>`;
}

function shippingLabelPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Shipping labels preview</span><h3>Label Print</h3></div></div>
    <div class="shipping-label">
      <strong>HGX EXPRESS</strong>
      <span>To: Priya S, Bandra West, Mumbai</span>
      <div class="barcode"></div>
      <small>AWB HGX784210492</small>
    </div>
  </article>`;
}

function deliveryDashboardPanel() {
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">Delivery dashboard</span><h3>Live Fulfillment Desk</h3></div><span class="live-dot">Live</span></div>
    <div class="delivery-dashboard">
      ${deliveryStat("Out for delivery", "9,842", "+12%")}
      ${deliveryStat("Delivered today", "8,996", "91.4%")}
      ${deliveryStat("Rider utilization", "78%", "+6 pts")}
      ${deliveryStat("Route savings", "412 km", "AI optimized")}
    </div>
  </article>`;
}

function routeOptimizationPanel() {
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">Route optimization demo</span><h3>Mumbai Priority Route</h3></div><button class="secondary-button compact">Optimize</button></div>
    <div class="tracking-map delivery-route"><div class="route-path"></div><span class="pin start">WH</span><span class="pin stop one">S1</span><span class="pin stop two">S2</span><span class="pin rider">RD</span><span class="pin end">CU</span></div>
  </article>`;
}

function deliveryHeatmapPanel() {
  const cells = [82, 66, 48, 91, 73, 42, 58, 86, 39, 74, 95, 63, 52, 88, 69, 44, 76, 57, 92, 61, 35, 79, 84, 49];
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Delivery heatmap</span><h3>Demand Density</h3></div><span class="badge">24 zones</span></div>
    <div class="heatmap delivery-heatmap">${cells.map((value) => `<span style="--heat:${value}%"></span>`).join("")}</div>
  </article>`;
}

function driverAssignmentPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Driver assignment</span><h3>Rider Queue</h3></div><button class="primary-button compact">Assign</button></div>
    <div class="mini-list">
      ${driverRow("Rahul Verma", "Bandra West", "12 orders", "Assigned")}
      ${driverRow("Anika Shah", "Andheri East", "9 orders", "Ready")}
      ${driverRow("Imran Khan", "Powai", "14 orders", "Priority")}
      ${driverRow("Meera Iyer", "Worli", "7 orders", "Standby")}
    </div>
  </article>`;
}

function successRatePanel() {
  return `<article class="panel score-panel">
    <div class="panel-header"><div><span class="eyebrow">Success rate analytics</span><h3>Delivery Success</h3></div><span class="badge">Healthy</span></div>
    <div class="score-ring cyan"><strong>91</strong><span>%</span></div>
    <p class="page-copy">On-time delivery, first-attempt success, and rider acceptance are all above the weekly benchmark.</p>
    <div class="sparkline">${[58, 64, 61, 72, 76, 84, 91].map((h) => `<span style="height:${h}%"></span>`).join("")}</div>
  </article>`;
}

function failedDeliveryReportsPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Failed delivery reports</span><h3>Exception Queue</h3></div><span class="badge warn">312</span></div>
    <div class="mini-list">
      ${failedDeliveryRow("Customer unavailable", "128 orders", "Retry")}
      ${failedDeliveryRow("Address mismatch", "84 orders", "Verify")}
      ${failedDeliveryRow("Payment pending", "62 orders", "Collect")}
      ${failedDeliveryRow("Weather delay", "38 orders", "Reschedule")}
    </div>
  </article>`;
}

function deliveryTimelinePanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Delivery timeline</span><h3>#DL-784210</h3></div></div>
    ${timeline(["Order packed at Mumbai WH-01", "AI route optimized", "Driver assigned", "Out for delivery", "First attempt scheduled"])}
  </article>`;
}

function deliveryTrackingPanel() {
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">Delivery tracking demo</span><h3>Live Route</h3></div><span class="live-dot">Live</span></div>
    <div class="tracking-map"><div class="route-path"></div><span class="pin start">WH</span><span class="pin end">CU</span><span class="pin rider">RD</span></div>
  </article>`;
}

function deliveryStat(label, value, note) {
  return `<div><span>${label}</span><strong>${value}</strong><small>${note}</small></div>`;
}

function driverRow(name, zone, orders, status) {
  return `<div class="mini-row"><span class="avatar">${name.split(" ").map((part) => part[0]).join("")}</span><strong>${name}</strong><small>${zone} - ${orders}</small><span class="badge">${status}</span></div>`;
}

function failedDeliveryRow(reason, count, action) {
  return `<div class="mini-row"><span class="dot amber"></span><strong>${reason}</strong><small>${count}</small><span class="badge warn">${action}</span></div>`;
}

function refundTimelinePanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Refund timeline</span><h3>Return Case #RF-8842</h3></div></div>
    ${timeline(["Refund requested", "AI reason classified", "Pickup approved", "QC pending", "Refund scheduled"])}
  </article>`;
}

function timeline(items) {
  return `<div class="timeline">${items.map((item) => `<div><span></span><p>${item}</p></div>`).join("")}</div>`;
}

function customerProfilesPanel() {
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">Customer profiles</span><h3>CRM Profiles</h3></div><button class="primary-button">Create Segment</button></div>
    <div class="customer-profile-grid">
      ${customerProfile("Priya Sharma", "Mumbai", "Rs 2.8L CLV", "VIP", "91 AI score")}
      ${customerProfile("Aarav Mehta", "Delhi", "Rs 1.6L CLV", "Gold", "86 AI score")}
      ${customerProfile("Nisha Kapoor", "Pune", "Rs 92k CLV", "Silver", "74 AI score")}
      ${customerProfile("Rohan Jain", "Jaipur", "Rs 74k CLV", "Growth", "68 AI score")}
    </div>
  </article>`;
}

function customerProfile(name, city, clv, tier, score) {
  return `<div class="customer-profile"><div class="avatar">${name.split(" ").map((part) => part[0]).join("")}</div><div><strong>${name}</strong><small>${city} - ${clv}</small><small>${score}</small></div><span class="badge">${tier}</span></div>`;
}

function vipCustomersPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">VIP customers</span><h3>High Value Buyers</h3></div><span class="badge">24 cohorts</span></div>
    <div class="mini-list">
      <div class="mini-row"><span class="rank">1</span><strong>Priya Sharma</strong><span class="badge">Rs 2.8L</span></div>
      <div class="mini-row"><span class="rank">2</span><strong>Aarav Mehta</strong><span class="badge">Rs 1.6L</span></div>
      <div class="mini-row"><span class="rank">3</span><strong>Devika Rao</strong><span class="badge">Rs 1.2L</span></div>
    </div>
  </article>`;
}

function customerSegmentsPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Customer segments</span><h3>Audience Studio</h3></div></div>
    <div class="segment-list">
      ${segmentRow("High repeat grocery", "184k customers", "42% repeat")}
      ${segmentRow("Beauty subscribers", "72k customers", "2.4x ROAS")}
      ${segmentRow("Dormant VIPs", "9.8k customers", "Winback ready")}
      ${segmentRow("Cart abandoners", "38k customers", "High intent")}
    </div>
  </article>`;
}

function segmentRow(name, size, signal) {
  return `<div class="segment-row"><div><strong>${name}</strong><small>${size}</small></div><span class="badge">${signal}</span></div>`;
}

function loyaltyPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Loyalty levels</span><h3>Tier Mix</h3></div></div>
    <div class="loyalty-levels">
      <div><strong>Platinum</strong><span style="width:72%"></span><small>18,420 customers</small></div>
      <div><strong>Gold</strong><span style="width:84%"></span><small>42,810 customers</small></div>
      <div><strong>Silver</strong><span style="width:58%"></span><small>86,200 customers</small></div>
    </div>
  </article>`;
}

function purchaseHistoryPanel() {
  return `<article class="panel wide">
    <div class="panel-header"><div><span class="eyebrow">Purchase history</span><h3>Recent Orders</h3></div><button class="secondary-button compact">Export</button></div>
    <div class="data-table">
      ${tableRow(["Priya Sharma", "Premium Grocery Bundle", "Rs 4,820", "2 hrs ago"])}
      ${tableRow(["Aarav Mehta", "Glow Serum Combo", "Rs 1,799", "5 hrs ago"])}
      ${tableRow(["Nisha Kapoor", "Daily Staples Pack", "Rs 1,249", "Yesterday"])}
    </div>
  </article>`;
}

function clvPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Customer lifetime value</span><h3>CLV Forecast</h3></div><span class="badge">AI</span></div>
    <div class="forecast-value">Rs 18,420</div>
    <p class="page-copy">Average 12-month CLV for active repeat customers, up 16.8% after loyalty automation.</p>
    <div class="sparkline">${[34, 42, 51, 58, 66, 78, 88].map((h) => `<span style="height:${h}%"></span>`).join("")}</div>
  </article>`;
}

function aiCustomerScorePanel() {
  return `<article class="panel score-panel">
    <div class="panel-header"><div><span class="eyebrow">AI customer score</span><h3>Retention Score</h3></div><span class="badge">Strong</span></div>
    <div class="score-ring"><strong>91</strong><span>/100</span></div>
    <p class="page-copy">AI predicts strong repeat purchase behavior for premium grocery and beauty cohorts.</p>
    <div class="score-factors"><span>Frequency</span><span>AOV</span><span>Support sentiment</span></div>
  </article>`;
}

function customerJourneyPanel() {
  return `<article class="panel">
    <div class="panel-header"><div><span class="eyebrow">Customer journey timeline</span><h3>Priya Sharma</h3></div></div>
    ${timeline(["Discovered via Instagram campaign", "First grocery order placed", "Joined Gold loyalty tier", "Subscribed to monthly staples", "Became Platinum VIP"])}
  </article>`;
}

function workflow(name, detail, status) {
  return `<div class="workflow"><div><strong>${name}</strong><small>${detail}</small></div><span class="badge">${status}</span><button class="secondary-button compact">Configure</button></div>`;
}

function setView(viewName) {
  const view = views[viewName] || views.dashboard;
  const stage = document.querySelector("#viewStage");
  document.querySelector("#viewEyebrow").textContent = view.eyebrow;
  document.querySelector("#viewTitle").textContent = view.title;
  stage.classList.add("is-loading");
  stage.innerHTML = loadingSkeleton();
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === viewName));
  closeFloating();
  window.clearTimeout(setView.timer);
  setView.timer = window.setTimeout(() => {
    stage.innerHTML = view.html;
    stage.classList.remove("is-loading");
    stage.classList.remove("page-enter");
    void stage.offsetWidth;
    stage.classList.add("page-enter");
    initViewInteractions(stage);
  }, 260);
}

function showToast(message) {
  let toast = document.querySelector("#toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("open");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("open"), 2200);
}

function loadingSkeleton() {
  return `<section class="skeleton-grid">
    <div class="skeleton hero-skeleton"></div>
    ${Array.from({ length: 8 }, () => `<div class="skeleton card-skeleton"></div>`).join("")}
  </section>`;
}

function animateCounter(element) {
  const text = element.dataset.count || element.textContent;
  const numeric = Number(text.replace(/[^0-9.]/g, ""));
  if (!numeric) return;
  const prefix = text.match(/^[^0-9]*/)?.[0] || "";
  const suffix = text.match(/[^0-9.]*$/)?.[0] || "";
  const decimals = text.includes(".") ? 1 : 0;
  const start = performance.now();
  const duration = 850;
  const render = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = numeric * eased;
    element.textContent = `${prefix}${value.toLocaleString("en-IN", {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals
    })}${suffix}`;
    if (progress < 1) requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
}

function initViewInteractions(root) {
  root.querySelectorAll("[data-count], .big-number, .forecast-value, .score-ring strong").forEach(animateCounter);
  root.querySelectorAll(".chart div, .sparkline span, .mini-graph span").forEach((bar, index) => {
    bar.style.animationDelay = `${index * 45}ms`;
  });
  root.querySelectorAll(".panel, .metric-card, .product-card, .category-card, .phone-mockup, .ai-card").forEach((card, index) => {
    card.style.setProperty("--float-delay", `${(index % 6) * 180}ms`);
  });
}

function createRipple(button, event) {
  const rect = button.getBoundingClientRect();
  const ripple = document.createElement("span");
  const size = Math.max(rect.width, rect.height);
  ripple.className = "button-ripple";
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
  button.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  document.documentElement.style.setProperty("--scroll-progress", `${Math.min(progress, 100)}%`);
}

function closeFloating() {
  document.querySelector("#notificationPanel").classList.remove("open");
  document.querySelector("#profilePanel").classList.remove("open");
  document.querySelector("#mobileScrim").classList.remove("open");
  document.querySelector("#sidebar").classList.remove("mobile-open");
}

function openCommand() {
  const modal = document.querySelector("#commandModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.querySelector("#commandInput").focus();
  renderCommands("");
}

function closeCommand() {
  const modal = document.querySelector("#commandModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function renderCommands(query) {
  const root = document.querySelector("#commandResults");
  const items = Object.entries(views).filter(([key, view]) => `${key} ${view.title}`.toLowerCase().includes(query.toLowerCase()));
  root.innerHTML = items.map(([key, view]) => `<button data-view="${key}"><span>${view.eyebrow}</span><strong>${view.title}</strong></button>`).join("");
}

document.addEventListener("click", (event) => {
  const rippleButton = event.target.closest("button");
  if (rippleButton) createRipple(rippleButton, event);

  const chartPoint = event.target.closest(".chart div, .sparkline span, .mini-graph span, .heatmap span");
  if (chartPoint) {
    const value = chartPoint.style.height || chartPoint.style.getPropertyValue("--heat") || "live";
    showToast(`Chart signal selected: ${value}`);
    return;
  }

  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    setView(viewButton.dataset.view);
    closeCommand();
    showToast(`Opened ${views[viewButton.dataset.view]?.title || "demo page"}`);
    return;
  }

  const segmentedButton = event.target.closest(".segmented button");
  if (segmentedButton) {
    segmentedButton.parentElement.querySelectorAll("button").forEach((button) => button.classList.remove("active"));
    segmentedButton.classList.add("active");
    if (segmentedButton.dataset.productView) {
      document.querySelector("#productGridView")?.classList.toggle("hidden", segmentedButton.dataset.productView !== "grid");
      document.querySelector("#productListView")?.classList.toggle("open", segmentedButton.dataset.productView === "list");
    }
    showToast(`${segmentedButton.textContent} range selected`);
    return;
  }

  const productButton = event.target.closest("[data-open-product]");
  if (productButton) {
    const modal = document.querySelector("#productModal");
    document.querySelector("#modalProductName").textContent = productButton.dataset.openProduct;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    showToast(`Opened ${productButton.dataset.openProduct}`);
    return;
  }

  if (event.target.closest("#closeProductModal") || event.target.id === "productModal") {
    const modal = document.querySelector("#productModal");
    modal?.classList.remove("open");
    modal?.setAttribute("aria-hidden", "true");
    return;
  }

  const demoButton = event.target.closest("button");
  if (demoButton && !demoButton.id && !demoButton.closest(".command-results")) {
    showToast(`${demoButton.textContent.trim() || "Action"} is ready in demo mode`);
  }
});

document.querySelector("#collapseSidebar").addEventListener("click", () => {
  document.querySelector("#appShell").classList.toggle("sidebar-collapsed");
});

document.querySelector("#mobileMenu").addEventListener("click", () => {
  document.querySelector("#sidebar").classList.add("mobile-open");
  document.querySelector("#mobileScrim").classList.add("open");
});

document.querySelector("#mobileScrim").addEventListener("click", closeFloating);
document.querySelector("#openCommand").addEventListener("click", openCommand);
document.querySelector("#notificationButton").addEventListener("click", () => document.querySelector("#notificationPanel").classList.toggle("open"));
document.querySelector("#profileButton").addEventListener("click", () => document.querySelector("#profilePanel").classList.toggle("open"));
document.querySelector("#markRead").addEventListener("click", () => document.querySelector("#notificationList").innerHTML = `<div class="mini-row"><strong>All caught up</strong><small>No unread demo alerts</small></div>`);
document.querySelector("#aiOrb").addEventListener("click", () => document.querySelector("#assistantPanel").classList.toggle("open"));
document.querySelector("#closeAssistant").addEventListener("click", () => document.querySelector("#assistantPanel").classList.remove("open"));
document.querySelector("#globalSearch").addEventListener("focus", openCommand);
document.querySelector("#commandInput").addEventListener("input", (event) => renderCommands(event.target.value));

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openCommand();
  }
  if (event.key === "Escape") {
    closeCommand();
    closeFloating();
    document.querySelector("#productModal")?.classList.remove("open");
    document.querySelector("#assistantPanel").classList.remove("open");
  }
});

document.querySelector("#commandModal").addEventListener("click", (event) => {
  if (event.target.id === "commandModal") closeCommand();
});

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
document.querySelector("#notificationList").innerHTML = notifications.map((item) => `<div class="mini-row"><span class="dot blue"></span><strong>${item}</strong><small>Just now</small></div>`).join("");
setView("dashboard");
updateScrollProgress();
