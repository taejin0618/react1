import React from "react";

const PremiumSlide = () => {
  // 색상 정의
  const colors = {
    primary: "#2563EB", // 로열 블루
    secondary: "#475569", // 다크 그레이
    background: "#f8fafc", // 라이트 그레이 배경
    importance: {
      high: "#ef4444", // 레드
      medium: "#f59e0b", // 오렌지
      low: "#10b981", // 그린
    },
    title: {
      start: "#2563EB", // 그라데이션 시작
      end: "#1e40af", // 그라데이션 끝
    },
    sectionTitle: "#1e40af",
    bodyText: "#334155",
    white: "#FFFFFF",
    lightGray: "#f1f5f9",
  };

  // 타이포그래피 정의
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
  };

  // 레이아웃 및 컴포넌트 스타일
  const styles: { [key: string]: React.CSSProperties } = {
    slide: {
      backgroundColor: colors.background,
      padding: "40px",
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "40px",
    },
    headerLeft: {
      display: "flex",
      flexDirection: "column",
    },
    headerRight: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      color: colors.secondary,
      fontSize: "12px",
    },
    content: {
      display: "flex",
      flex: 1,
      gap: "40px",
    },
    leftColumn: {
      flex: "60%",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },
    rightColumn: {
      flex: "40%",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },
    card: {
      backgroundColor: colors.white,
      borderRadius: "12px",
      padding: "24px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
      marginBottom: "24px",
    },
    problemsCard: {
      backgroundColor: colors.white,
      borderRadius: "12px",
      padding: "24px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
      borderLeft: `4px solid ${colors.importance.high}`,
    },
    benefitsCard: {
      backgroundColor: colors.white,
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
      marginBottom: "16px",
      borderLeft: `4px solid ${colors.importance.low}`,
    },
    codeBlock: {
      backgroundColor: colors.lightGray,
      borderRadius: "8px",
      padding: "12px",
      fontFamily: "monospace",
      fontSize: "12px",
      color: colors.bodyText,
      whiteSpace: "pre",
      overflow: "hidden",
      marginBottom: "8px",
      borderLeft: `3px solid ${colors.primary}`,
    },
    list: {
      paddingLeft: "20px",
      marginTop: "8px",
      marginBottom: "16px",
    },
    listItem: {
      marginBottom: "8px",
      position: "relative",
      paddingLeft: "8px",
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "24px",
      paddingTop: "16px",
      borderTop: `1px solid ${colors.lightGray}`,
      fontSize: "11px",
      color: colors.secondary,
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
    keyMetric: {
      textAlign: "center",
      padding: "16px",
      backgroundColor: "rgba(37, 99, 235, 0.1)",
      borderRadius: "8px",
      marginBottom: "16px",
    },
    metricValue: {
      fontSize: "24px",
      fontWeight: "bold",
      color: colors.primary,
      marginBottom: "4px",
    },
    horizSeparator: {
      width: "40px",
      height: "3px",
      backgroundColor: colors.primary,
      margin: "12px 0",
    },
  };

  // 팀별 색상 정의
  const teamColors = {
    common: "#2563EB",
    learning: "#9333ea",
    hu: "#0891b2",
    edu: "#0d9488",
  };

  // 아이콘 컴포넌트
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
      case "gear":
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
    return (
      <span
        style={{
          color: colors.primary,
          marginRight: "8px",
          display: "inline-flex",
        }}
      >
        {icon}
      </span>
    );
  };

  return (
    <div style={styles.slide}>
      {/* 헤더 섹션 */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={typography.title}>API 응답 표준화 전략</h1>
          <p style={typography.subtitle}>
            팀, 유닛, 프로젝트별로 흩어져 있는 API 응답 규칙을 테크본부 공통의
            룰로 문서화하고 통합하여 생산성 향상 및 MSA 기반 강화
          </p>
        </div>
        <div style={styles.headerRight}>
          <p>2025.04.28</p>
          <p>테크본부 QA Unit</p>
        </div>
      </div>

      {/* 메인 콘텐츠 섹션 */}
      <div style={styles.content}>
        {/* 왼쪽 60% 컬럼 */}
        <div style={styles.leftColumn}>
          {/* 현재 상황 및 문제점 카드 */}
          <div style={styles.card}>
            <h3 style={typography.sectionTitle}>
              <Icon name="alert-circle" />
              현황 및 목표
            </h3>
            <p style={typography.body}>
              현재 회사 내 각 팀과 프로젝트에서 서로 다른 API 응답 형식을
              사용하고 있습니다. 이를 하나의 표준으로 통합하여 개발 생산성을
              높이고, API 연동 과정을 보다 쉽고 안정적으로 개선
            </p>
            <div style={styles.horizSeparator}></div>
            <div style={styles.problemsCard}>
              <h4
                style={{
                  ...typography.body,
                  fontWeight: "bold",
                  color: colors.importance.high,
                }}
              >
                {/* <span style={{ fontSize: "18px" }}>현황</span> */}
              </h4>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <span style={typography.body}>
                    <b>팀별 불일치</b>: 각 팀마다 상이한 API 응답 형식 사용
                  </span>
                </li>
                <li style={styles.listItem}>
                  <span style={typography.body}>
                    <b>코드 중복</b>: 다양한 응답 형식에 대응하기 위한 중복 로직
                    개발
                  </span>
                </li>
                <li style={styles.listItem}>
                  <span style={typography.body}>
                    <b>비효율성</b>: 테스트 자동화, 문서화, 유지보수 복잡성 증가
                  </span>
                </li>
                {/* <li style={styles.listItem}>
                  <span style={typography.body}>
                    <b>MSA 장애요소</b>: 서비스 간 통합 복잡도 증가 및 확장성
                    제한
                  </span>
                </li> */}
              </ul>
            </div>
          </div>
          {/* API 표준화 접근 방안 카드 */}
          <div style={styles.card}>
            <h3 style={typography.sectionTitle}>
              <Icon name="layers" />
              구현 로드맵
            </h3>
            <div style={styles.roadmapStep}>
              <div style={{ display: "flex", alignItems: "flex-start" }}>
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
                  <p style={{ ...typography.body, margin: 0 }}>
                    현황 분석을 바탕으로 각 팀의 모범 사례 식별
                  </p>
                </div>
              </div>
            </div>
            <div style={styles.roadmapStep}>
              <div style={{ display: "flex", alignItems: "flex-start" }}>
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
                  <p style={{ ...typography.body, margin: 0 }}>
                    공통플랫폼 팀 등 체계적 접근 방식 참조
                  </p>
                </div>
              </div>
            </div>
            <div style={styles.roadmapStep}>
              <div style={{ display: "flex", alignItems: "flex-start" }}>
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
                  <p style={{ ...typography.body, margin: 0 }}>
                    REST API 응답 형식, HTTP 상태 코드, 오류/성공 응답 구조 등
                    문서화
                  </p>
                </div>
              </div>
            </div>
            <div style={styles.roadmapStep}>
              <div style={{ display: "flex", alignItems: "flex-start" }}>
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
                  <p style={{ ...typography.body, margin: 0 }}>
                    일관된 버전 관리 규칙 수립 및 하위 호환성 유지 방안 마련
                  </p>
                </div>
              </div>
            </div>
            <div style={styles.roadmapStep}>
              <div style={{ display: "flex", alignItems: "flex-start" }}>
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
                  <p style={{ ...typography.body, margin: 0 }}>
                    신규 API부터 적용, 기존 프로젝트는 점진적 마이그레이션
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 핵심 기대 효과 */}
          <div style={styles.card}>
            <h3 style={typography.sectionTitle}>
              <Icon name="target" />
              핵심 기대 효과
            </h3>
            <div
              style={{
                ...typography.body,
                padding: "16px",
                backgroundColor: "rgba(37, 99, 235, 0.05)",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            >
              <p style={{ marginBottom: "12px" }}>
                이 제안은 앞으로의 API 개발 시 API 스펙을 문서화하고, 테크본부
                전체가 일관된 방식으로 작업할 수 있도록 하는 것입니다.
              </p>

              <p style={{ marginBottom: "12px" }}>
                특히 다른 팀의 API를 연동하고 테스트하는 개발자와 QA 입장에서는
                표준화된 응답 형식이 큰 도움이 됩니다. 여러 팀의 API를 연동할
                때마다 서로 다른 응답 형식을 처리해야 하는 불편함이 사라지고,
                일관된 방식으로 API를 테스트하고 검증할 수 있게 됩니다.
              </p>

              <p style={{ marginBottom: "0px" }}>
                현재 흩어져 있는 규칙들을 하나의 공통 표준으로 만들고 표준화된
                문서를 통해 통합하면 우리 테크본부가 더욱 효율적으로 협업할 수
                있을 것입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 오른쪽 40% 컬럼 */}
        <div style={styles.rightColumn}>
          {/* 팀별 응답 형식 예시 카드 */}
          <div style={styles.card}>
            <h3 style={typography.sectionTitle}>
              <Icon name="code" />
              팀별 API 응답 형식 현황
            </h3>
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
  "code": 500,
  "version": "1.0",
  "datetime": "2024-03-25T04:10:27",
  "duration": 70,
  "payload": {
    "message": "데이터베이스가 응답하지 않습니다.",
    "detail": { ... }
  }
}`}
            </div>

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
  "code": "EC10015", 
  "status": false, 
  "message": "데이터 유형이 올바르지 않습니다.", 
  "result": null 
}`}
            </div>

            <div
              style={{ ...styles.teamLabel, backgroundColor: teamColors.hu }}
            >
              Hu 플랫폼팀
            </div>
            <div style={styles.codeBlock}>
              {`{ 
  "success": false, 
  "code": null, 
  "message": "이미 등록 되었습니다.", 
  "data": null, 
  "error": null, 
  "reason": null 
}`}
            </div>

            <div
              style={{ ...styles.teamLabel, backgroundColor: teamColors.edu }}
            >
              연수원(Edumanager)
            </div>
            <div style={styles.codeBlock}>
              {`{ 
  "timestamp": 1745190690875, 
  "status": 400, 
  "error": "Bad Request", 
  "path": "/api/unit/unitlist" 
}`}
            </div>
          </div>

          {/* 이해관계자별 이점 카드 */}
          <div style={styles.card}>
            <h3 style={typography.sectionTitle}>
              <Icon name="users" />
              이해관계자별 이점
            </h3>

            <div style={styles.benefitsCard}>
              <h4
                style={{
                  ...typography.body,
                  fontWeight: "bold",
                  color: colors.primary,
                }}
              >
                QA Unit
              </h4>
              <ul style={{ ...styles.list, marginBottom: "8px" }}>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  <span style={typography.body}>
                    일관된 테스트 기준으로 효율성 향상
                  </span>
                </li>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  <span style={typography.body}>
                    테스트 자동화 스크립트 작성 용이
                  </span>
                </li>
              </ul>
            </div>

            <div style={styles.benefitsCard}>
              <h4
                style={{
                  ...typography.body,
                  fontWeight: "bold",
                  color: colors.primary,
                }}
              >
                프론트엔드
              </h4>
              <ul style={{ ...styles.list, marginBottom: "8px" }}>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  <span style={typography.body}>API 응답 구조 예측 가능</span>
                </li>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  <span style={typography.body}>
                    공통 처리 로직으로 코드 재사용성 증가
                  </span>
                </li>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  <span style={typography.body}>개발자 온보딩 시간 단축</span>
                </li>
              </ul>
            </div>

            <div style={styles.benefitsCard}>
              <h4
                style={{
                  ...typography.body,
                  fontWeight: "bold",
                  color: colors.primary,
                }}
              >
                백엔드 개발
              </h4>
              <ul style={{ ...styles.list, marginBottom: "8px" }}>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  <span style={typography.body}>
                    새 API 개발 시 의사결정 복잡성 감소
                  </span>
                </li>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  <span style={typography.body}>
                    일관된 코드베이스 유지 가능
                  </span>
                </li>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  <span style={typography.body}>
                    동일한 오류 응답 구조를 가지므로 디버깅과 문제 해결이 간소화
                  </span>
                </li>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  <span style={typography.body}>
                    팀 이동 시에도 동일한 표준 적용으로 온보딩 시간 단축
                  </span>
                </li>
              </ul>
            </div>

            <div style={styles.benefitsCard}>
              <h4
                style={{
                  ...typography.body,
                  fontWeight: "bold",
                  color: colors.primary,
                }}
              >
                MSA 아키텍처
              </h4>
              <ul style={{ ...styles.list, marginBottom: "8px" }}>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  <span style={typography.body}>
                    서비스 간 일관된 응답 규칙으로 통합 간소화
                  </span>
                </li>
                <li style={{ ...styles.listItem, marginBottom: "4px" }}>
                  <span style={typography.body}>
                    신규 마이크로서비스 개발 가속화
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 푸터 섹션 */}
      <div style={styles.footer}>
        <div style={styles.logo}>
          <div></div>
        </div>
        <div>API 응답 표준화 제안 • QA Unit • Confidential</div>
      </div>
    </div>
  );
};

export default PremiumSlide;
