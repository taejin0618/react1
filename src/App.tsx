import React from "react";

const PremiumSlide = () => {
  // Color Definitions
  const colors = {
    primary: "#2563EB", // Royal Blue
    secondary: "#475569", // Dark Gray
    background: "#f8fafc", // Light Gray Background
    importance: {
      high: "#ef4444", // Red
      medium: "#f59e0b", // Orange
      low: "#10b981", // Green
    },
    title: {
      start: "#2563EB", // Gradient Start
      end: "#1e40af", // Gradient End
    },
    sectionTitle: "#1e40af",
    bodyText: "#334155",
    white: "#FFFFFF",
    lightGray: "#f1f5f9",
  };

  // Typography Definitions
  const typography = {
    title: {
      fontSize: "32px",
      fontWeight: "bold",
      background: `linear-gradient(135deg, ${colors.title.start}, ${colors.title.end})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: "Arial, sans-serif",
    },
    subtitle: {
      fontSize: "16px",
      color: colors.secondary,
      fontFamily: "Arial, sans-serif",
      marginTop: "8px",
    },
    sectionTitle: {
      fontSize: "18px",
      color: colors.sectionTitle,
      fontWeight: "bold",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      alignItems: "center",
      marginBottom: "16px",
    },
    body: {
      fontSize: "14px",
      color: colors.bodyText,
      lineHeight: 1.4,
      fontFamily: "Arial, sans-serif",
    },
    // Added smaller body text for benefits cards
    smallBody: {
      fontSize: "12px",
      color: colors.bodyText,
      lineHeight: 1.4,
      fontFamily: "Arial, sans-serif",
    },
  };

  // Layout and Component Styles
  const styles: { [key: string]: React.CSSProperties } = {
    slide: {
      backgroundColor: colors.background,
      padding: "40px",
      width: "100%",
      minHeight: "100vh", // Ensure slide takes at least full viewport height
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "40px",
      flexShrink: 0,
    },
    headerLeft: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      marginRight: "20px",
    },
    headerRight: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      color: colors.secondary,
      fontSize: "12px",
      flexShrink: 0,
      textAlign: "right",
    },
    // Container for the main content sections (columns + full-width)
    mainContainer: {
      flex: 1, // Allow this container to grow and push footer down
      display: "flex",
      flexDirection: "column",
    },
    // Container for the two columns
    columnsContainer: {
      display: "flex",
      gap: "40px",
      marginBottom: "24px", // Space between columns and the first full-width section
    },
    leftColumn: {
      flex: "60%",
      display: "flex",
      flexDirection: "column",
    },
    rightColumn: {
      flex: "40%",
      display: "flex",
      flexDirection: "column",
    },
    card: {
      backgroundColor: colors.white,
      borderRadius: "12px",
      padding: "24px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
      marginBottom: "24px", // Standard margin between cards in the same column
    },
    // Style for the last card in a column to optionally remove bottom margin
    lastCardInColumn: {
      marginBottom: 0,
    },
    problemsCard: {
      backgroundColor: colors.white,
      borderRadius: "12px",
      padding: "24px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
      borderLeft: `4px solid ${colors.importance.high}`,
      marginTop: "16px",
    },
    // Container for the full-width benefits section
    benefitsSectionContainer: {
      width: "100%", // Takes full width relative to slide padding
      marginBottom: "24px", // Space before the next section or footer
      // Removed background color, border radius etc. - these are on the inner cards
    },
    // Flex container for the horizontal benefit cards
    benefitsCardsRow: {
      display: "flex",
      gap: "20px", // Gap between benefit cards
    },
    benefitsCard: {
      // Style for individual benefit cards
      backgroundColor: colors.white,
      borderRadius: "12px",
      padding: "16px", // Reduced padding for smaller cards
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
      borderLeft: `4px solid ${colors.importance.low}`,
      flex: 1, // Allow cards to share space equally
      display: "flex",
      flexDirection: "column",
    },
    benefitCardTitle: {
      ...typography.body,
      fontWeight: "bold",
      color: colors.primary,
      margin: "0 0 8px 0",
      fontSize: "13px",
      flexShrink: 0,
    },
    benefitCardList: {
      paddingLeft: "15px", // Adjust padding for bullets
      marginTop: 0,
      marginBottom: 0, // Remove bottom margin within card
      flexGrow: 1,
      listStyleType: "disc", // Ensure bullets are shown
      listStylePosition: "outside", // Bullets outside the text flow
    },
    benefitCardListItem: {
      marginBottom: "4px", // Space between items
      // Removed base styles inheritance as list handles padding/margin
    },
    // Container for the Key Effects section (now full-width)
    keyEffectsSectionContainer: {
      width: "100%",
      marginBottom: "24px", // Space before the next section (Benefits)
      backgroundColor: colors.white, // Add white background like a card
      borderRadius: "12px", // Add rounded corners
      padding: "24px", // Add padding like a card
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)", // Add shadow like a card
    },
    keyEffectsContentBox: {
      ...typography.body,
      padding: "16px", // Padding inside the light blue box
      backgroundColor: "rgba(37, 99, 235, 0.05)", // Light blue background
      borderRadius: "8px", // Rounded corners for the inner box
    },
    codeBlock: {
      backgroundColor: colors.lightGray,
      borderRadius: "8px",
      padding: "12px",
      fontFamily: "monospace",
      fontSize: "12px",
      color: colors.bodyText,
      whiteSpace: "pre-wrap",
      overflowX: "auto",
      marginBottom: "8px",
      borderLeft: `3px solid ${colors.primary}`,
    },
    list: {
      // Base list style (used by problems list)
      paddingLeft: "20px",
      marginTop: "8px",
      marginBottom: "16px",
      listStyleType: "none",
    },
    listItem: {
      // Base list item style (used by problems list)
      marginBottom: "8px",
      position: "relative",
      paddingLeft: "8px",
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "auto",
      paddingTop: "16px",
      borderTop: `1px solid ${colors.lightGray}`,
      fontSize: "11px",
      color: colors.secondary,
      flexShrink: 0,
      width: "100%",
    },
    logo: {
      height: "24px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    logoText: {
      fontWeight: "bold",
      fontSize: "14px",
      background: `linear-gradient(135deg, ${colors.title.start}, ${colors.title.end})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    icon: {
      marginRight: "8px",
      color: colors.primary,
      display: "inline-flex",
      verticalAlign: "middle",
      width: "16px",
      height: "16px",
      flexShrink: 0,
    },
    roadmapStep: {
      display: "flex",
      alignItems: "flex-start",
      marginBottom: "16px",
    },
    stepNumber: {
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      backgroundColor: colors.primary,
      color: colors.white,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "12px",
      fontWeight: "bold",
      fontSize: "12px",
      flexShrink: 0,
    },
    stepContent: {
      flex: 1,
    },
    teamLabel: {
      display: "inline-block",
      color: colors.white,
      padding: "2px 6px",
      borderRadius: "4px",
      fontSize: "10px",
      fontWeight: "bold",
      marginBottom: "4px",
    },
    horizSeparator: {
      width: "40px",
      height: "3px",
      backgroundColor: colors.primary,
      margin: "12px 0",
    },
  };

  // Team Color Definitions
  const teamColors = {
    common: "#2563EB",
    learning: "#9333ea",
    hu: "#0891b2",
    edu: "#0d9488",
  };

  // Icon Component (using Feather icons SVG paths)
  const Icon = ({ name }: { name: string }) => {
    let icon;
    switch (name) {
      case "alert-circle":
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        );
        break;
      case "check-circle":
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        );
        break;
      case "activity":
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        );
        break;
      case "users":
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
        break;
      case "gear": // Using a simplified gear/settings icon
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        );
        break;
      case "code":
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
        break;
      case "layers":
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
        );
        break;
      case "target":
        icon = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        );
        break;
      default:
        icon = null;
    }
    // Apply icon style directly here
    return <span style={styles.icon}>{icon}</span>;
  };

  return (
    <div style={styles.slide}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={typography.title}>API 응답 표준화 개선 방안</h1>
          <p style={typography.subtitle}>
            팀, 유닛, 프로젝트별로 흩어져 있는 API 응답 규칙을 테크본부 공통의
            룰로 문서화하고 통합하여 생산성 향상 및 MSA 기반 강화
          </p>
        </div>
        <div style={styles.headerRight}>
          {/* Using static date from original code */}
          <p>2025.04.28</p>
          <p>테크본부 QA Unit</p>
        </div>
      </div>
      {/* Main Content Container */}
      <div style={styles.mainContainer}>
        {/* Two Columns Section */}
        <div style={styles.columnsContainer}>
          {/* Left 60% Column */}
          <div style={styles.leftColumn}>
            {/* Current Situation & Problems Card */}
            <div style={styles.card}>
              <h3 style={typography.sectionTitle}>
                <Icon name="alert-circle" />
                현황 및 목표
              </h3>
              <p style={typography.body}>
                현재 회사 내 각 팀과 프로젝트에서 서로 다른 API 응답 형식을
                사용하고 있습니다. 이를 하나의 표준으로 통합하여 개발 생산성을
                높이고, API 연동 과정을 보다 쉽고 안정적으로 개선하고자 합니다.
              </p>
              <div style={styles.horizSeparator}></div>
              {/* Problems Sub-Card */}
              <div style={styles.problemsCard}>
                <ul
                  style={{
                    ...styles.list,
                    listStyleType: "disc", // Use standard bullets
                    paddingLeft: "25px", // Adjust padding for bullets
                    marginBottom: 0, // Remove bottom margin for list inside this card
                  }}
                >
                  <li style={{ ...styles.listItem, paddingLeft: 0 }}>
                    <span style={typography.body}>
                      <b>팀별 응답 형식 불일치</b>: 각 팀마다 상이한 API 응답
                      형식 사용
                    </span>
                  </li>
                  <li style={{ ...styles.listItem, paddingLeft: 0 }}>
                    <span style={typography.body}>
                      <b>코드 중복</b>: 다양한 응답 형식에 대응하기 위한 중복
                      로직 개발
                    </span>
                  </li>
                  <li style={{ ...styles.listItem, paddingLeft: 0 }}>
                    <span style={typography.body}>
                      <b>개발 비효율성</b>: 팀 간 API 연동 시 매번 다른 형식
                      처리 방식 적용
                    </span>
                  </li>
                  <li
                    style={{
                      ...styles.listItem,
                      paddingLeft: 0,
                      marginBottom: 0,
                    }}
                  >
                    {" "}
                    {/* Remove margin on last item */}
                    <span style={typography.body}>
                      <b>유지보수 복잡성</b>: 테스트 자동화, 문서화등 유지보수
                      복잡성 증가
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* API Standardization Approach Card (Roadmap) */}
            {/* Applied lastCardInColumn style here as it's the last in this column */}
            <div style={{ ...styles.card, ...styles.lastCardInColumn }}>
              <h3 style={typography.sectionTitle}>
                <Icon name="layers" />
                구현 로드맵
              </h3>
              {/* Roadmap Steps */}
              <div style={styles.roadmapStep}>
                <div style={styles.stepNumber}>1</div>
                <div style={styles.stepContent}>
                  <p
                    style={{
                      ...typography.body,
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    각 팀의 API 응답 형식 수집 및 분석
                  </p>
                  <p
                    style={{
                      ...typography.body,
                      margin: "4px 0 0 0",
                      fontSize: "13px",
                    }}
                  >
                    현황 분석을 바탕으로 각 팀의 모범 사례 식별
                  </p>
                </div>
              </div>
              <div style={styles.roadmapStep}>
                <div style={styles.stepNumber}>2</div>
                <div style={styles.stepContent}>
                  <p
                    style={{
                      ...typography.body,
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    공통 요소 추출 및 최적 사례 선정
                  </p>
                  <p
                    style={{
                      ...typography.body,
                      margin: "4px 0 0 0",
                      fontSize: "13px",
                    }}
                  >
                    공통플랫폼 팀 등 체계적 접근 방식 참조
                  </p>
                </div>
              </div>
              <div style={styles.roadmapStep}>
                <div style={styles.stepNumber}>3</div>
                <div style={styles.stepContent}>
                  <p
                    style={{
                      ...typography.body,
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    테크본부 표준 문서 작성
                  </p>
                  <p
                    style={{
                      ...typography.body,
                      margin: "4px 0 0 0",
                      fontSize: "13px",
                    }}
                  >
                    REST API 응답 형식, HTTP 상태 코드, 오류/성공 응답 구조 등
                    문서화
                  </p>
                </div>
              </div>
              <div style={styles.roadmapStep}>
                <div style={styles.stepNumber}>4</div>
                <div style={styles.stepContent}>
                  <p
                    style={{
                      ...typography.body,
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    API 버전 관리 체계화
                  </p>
                  <p
                    style={{
                      ...typography.body,
                      margin: "4px 0 0 0",
                      fontSize: "13px",
                    }}
                  >
                    일관된 버전 관리 규칙 수립 및 하위 호환성 유지 방안 마련
                  </p>
                </div>
              </div>
              <div style={{ ...styles.roadmapStep, marginBottom: 0 }}>
                {" "}
                {/* Remove margin from last step */}
                <div style={styles.stepNumber}>5</div>
                <div style={styles.stepContent}>
                  <p
                    style={{
                      ...typography.body,
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    표준 적용 및 지원
                  </p>
                  <p
                    style={{
                      ...typography.body,
                      margin: "4px 0 0 0",
                      fontSize: "13px",
                    }}
                  >
                    신규 API부터 적용, 기존 프로젝트는 점진적 마이그레이션
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End Left Column */}
          {/* Right 40% Column */}
          <div style={styles.rightColumn}>
            {/* Team API Response Format Examples Card */}
            {/* Applied lastCardInColumn style here as it's the last in this column */}
            <div style={{ ...styles.card, ...styles.lastCardInColumn }}>
              <h3 style={typography.sectionTitle}>
                <Icon name="code" />
                팀별 API 응답 형식 현황 (예시)
              </h3>
              {/* Common Platform Team */}
              <div
                style={{
                  ...styles.teamLabel,
                  backgroundColor: teamColors.common,
                }}
              >
                공통플랫폼 팀
              </div>
              <div style={styles.codeBlock}>
                {`{
  "code": 500, // HTTP Status or Custom Code
  "version": "1.0",
  "datetime": "2024-03-25T04:10:27",
  "duration": 70, // ms
  "payload": {
    "message": "Error description",
    "detail": { ... } // Specific error details
  }
}`}
              </div>
              {/* Learning Maker Solution Team */}
              <div
                style={{
                  ...styles.teamLabel,
                  backgroundColor: teamColors.learning,
                }}
              >
                러닝메이커솔루션 팀
              </div>
              <div style={styles.codeBlock}>
                {`{
  "code": "EC10015", // Custom Error Code
  "status": false, // Success/Fail flag
  "message": "Error description",
  "result": null // Data payload or null on error
}`}
              </div>
              {/* Hu Platform Team */}
              <div
                style={{ ...styles.teamLabel, backgroundColor: teamColors.hu }}
              >
                Hu 플랫폼팀
              </div>
              <div style={styles.codeBlock}>
                {`{
  "success": false, // Success/Fail flag
  "code": null, // Custom code (optional)
  "message": "Error description",
  "data": null, // Data payload or null on error
  "error": null, // Specific error object (optional)
  "reason": null // Reason phrase (optional)
}`}
              </div>
              {/* Edumanager Team */}
              <div
                style={{ ...styles.teamLabel, backgroundColor: teamColors.edu }}
              >
                연수원(Edumanager)
              </div>
              <div style={{ ...styles.codeBlock, marginBottom: 0 }}>
                {" "}
                {/* Remove margin from last block */}
                {`{
  "timestamp": 1745190690875, // Unix timestamp
  "status": 400, // HTTP Status Code
  "error": "Bad Request", // HTTP Status Text
  "path": "/api/unit/unitlist" // Request path
}`}
              </div>
            </div>
          </div>{" "}
          {/* End Right Column */}
        </div>{" "}
        {/* End Columns Section */}
        {/* ========== SWAPPED ORDER: Key Effects now comes FIRST ========== */}
        {/* Key Expected Effects (Full Width Section) */}
        <div style={styles.keyEffectsSectionContainer}>
          <h3 style={typography.sectionTitle}>
            {" "}
            {/* Use standard section title style */}
            <Icon name="target" />
            핵심 기대 효과
          </h3>
          <div style={styles.keyEffectsContentBox}>
            <p style={{ marginBottom: "12px" }}>
              이 개선 사항은 향후 API 개발 시 스펙을 명확히 문서화하고, 테크본부
              전체가 일관된 방식으로 작업하여 협업 효율성을 높이는 것이 목표
            </p>
            <p style={{ marginBottom: "12px" }}>
              특히 다른 팀의 API를 연동하고 테스트하는 개발자와 QA는 표준화된
              응답 형식을 통해 큰 이점을 얻을 수 있으며, 각기 다른 응답 형식을
              처리하는 불편함이 해소되어, 일관된 방식으로 API를 테스트하고 검증
              기대
            </p>
            <p style={{ marginBottom: "0px" }}>
              분산된 규칙을 공통 표준으로 통합하고 문서화함으로써, 테크본부의
              개발 생산성과 안정성을 크게 향상시킬 수 있을 것으로 기대하며 향후
              MSA 아키텍처에 적합한 API 응답 형식으로 발전할 수 있는 기회
            </p>
          </div>
        </div>
        {/* Stakeholder Benefits (Full Width Section) - Now comes SECOND */}
        <div style={styles.benefitsSectionContainer}>
          <h3 style={typography.sectionTitle}>
            {" "}
            {/* Use standard section title style */}
            <Icon name="users" />
            이해관계자별 이점
          </h3>
          <div style={styles.benefitsCardsRow}>
            {/* QA Unit Card */}
            <div style={styles.benefitsCard}>
              <h4 style={styles.benefitCardTitle}>QA Unit</h4>
              <ul style={styles.benefitCardList}>
                <li style={styles.benefitCardListItem}>
                  <span style={typography.smallBody}>
                    일관된 테스트 기준 효율성 향상
                  </span>
                </li>
                <li style={{ ...styles.benefitCardListItem, marginBottom: 0 }}>
                  {" "}
                  {/* Remove margin on last item */}
                  <span style={typography.smallBody}>
                    테스트 자동화 스크립트 작성 용이
                  </span>
                </li>
              </ul>
            </div>
            {/* Frontend Card */}
            <div style={styles.benefitsCard}>
              <h4 style={styles.benefitCardTitle}>프론트엔드</h4>
              <ul style={styles.benefitCardList}>
                <li style={styles.benefitCardListItem}>
                  <span style={typography.smallBody}>
                    API 응답 구조 예측 가능
                  </span>
                </li>
                <li style={styles.benefitCardListItem}>
                  <span style={typography.smallBody}>
                    공통 처리 로직 재사용성 증가
                  </span>
                </li>
                <li style={{ ...styles.benefitCardListItem, marginBottom: 0 }}>
                  {" "}
                  {/* Remove margin on last item */}
                  <span style={typography.smallBody}>
                    개발자 온보딩 시간 단축
                  </span>
                </li>
              </ul>
            </div>
            {/* Backend Card */}
            <div style={styles.benefitsCard}>
              <h4 style={styles.benefitCardTitle}>백엔드 개발</h4>
              <ul style={styles.benefitCardList}>
                <li style={styles.benefitCardListItem}>
                  <span style={typography.smallBody}>
                    통합 개발 효율성(타 팀 API 호출시 연동 작업 효율화)
                  </span>
                </li>
                <li style={styles.benefitCardListItem}>
                  <span style={typography.smallBody}>
                    일관된 코드베이스 유지
                  </span>
                </li>
                <li style={styles.benefitCardListItem}>
                  <span style={typography.smallBody}>
                    오류 구조 통일로 디버깅 간소화
                  </span>
                </li>
                <li style={{ ...styles.benefitCardListItem, marginBottom: 0 }}>
                  {" "}
                  {/* Remove margin on last item */}
                  <span style={typography.smallBody}>
                    팀 이동 시 온보딩 시간 단축
                  </span>
                </li>
              </ul>
            </div>
            {/* MSA Architecture Card */}
            <div style={styles.benefitsCard}>
              <h4 style={styles.benefitCardTitle}>MSA 아키텍처</h4>
              <ul style={styles.benefitCardList}>
                <li style={styles.benefitCardListItem}>
                  <span style={typography.smallBody}>
                    서비스 간 통합 간소화
                  </span>
                </li>
                <li style={styles.benefitCardListItem}>
                  {" "}
                  {/* Remove margin on last item */}
                  <span style={typography.smallBody}>
                    신규 서비스 개발 가속화
                  </span>
                </li>
                <li style={{ ...styles.benefitCardListItem, marginBottom: 0 }}>
                  {" "}
                  {/* Remove margin on last item */}
                  <span style={typography.smallBody}>
                    서비스 간 통신 신뢰성
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ========== END SWAP ========== */}
      </div>{" "}
      {/* End Main Content Container */}
      {/* Footer Section */}
      <div style={styles.footer}>
        <div style={styles.logo}>
          {/* Placeholder for a potential logo */}
          {/* <img src="/path/to/logo.svg" alt="Logo" style={{ height: '100%' }} /> */}
          {/* <span style={styles.logoText}>Your Company</span>{" "} */}
          {/* Example Text Logo */}
        </div>
        <div>API 응답 표준화 제안 • QA Unit • Confidential</div>
      </div>
    </div> // End Slide
  );
};

export default PremiumSlide;
