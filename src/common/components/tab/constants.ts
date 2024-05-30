import Cloudexplore from "common/documents/cloud-explore-lottie.json";
import cloudMigrate from "common/documents/cloud-migrate-lottie.json";
import cloudModernize from "common/documents/cloudmodernize-lottie.json";
import cloudManage from "common/documents/cloudmanage-lotte.json";
import dataStrategy from "common/documents/data-strategiy-lottie.json";
import dataManagement from "common/documents/data-management-lottie.json";
import analytics from "common/documents/advancedanalytics-lottie.json";
import AI from "common/documents/ml.json";
import native from "common/documents/app-dev.json";
import modernize from "common/documents/app-modernize.json";
import rapid from "common/documents/mvp.json";
import devops from "common/documents/devops.json";

export const tabFields = [
  {
    id: 1,
    tabName: "Data",
    properties: [
      {
        id: 1,
        name: "Data strategy",
        defaultOptions: {
          loop: false,
          autoplay: true,
          animationData: dataStrategy,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        },
        imgBgColor: "#FFCECE",
        description: "Create a data-driven culture!",

        keyWords:
          "Data on Cloud Deep Dives | Architecture & Design Workshops |ETL Pipelines |Project Charters | Quick POCs ",
      },
      {
        id: 2,
        name: "Data Management",
        imgBgColor: "#D6FFAD",
        defaultOptions: {
          loop: true,
          autoplay: true,
          animationData: dataManagement,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        },
        description: "All your databases are belong to us!",
        keyWords:
          "Database Consulting | Heterogenous Database Migrations | Datawarehouse Migrations | Data Security | BI Reports",
      },
      {
        id: 3,
        name: "Advanced analytics",
        imgBgColor: "#D6E4F9",
        description: "From raw data to business insights!",
        defaultOptions: {
          loop: true,
          autoplay: true,
          animationData: analytics,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        },
        keyWords:
          "Enterprise Data Lakes | Streaming Analytics | ETL Pipelines | Marketing Data Warehouse | Hadoop Migrations | Data lake & Data Warehouse Modernization",
      },
      {
        id: 4,
        name: "ML & AL",
        imgBgColor: "#F2F4B5",
        description: "Insights to predictions!",
        defaultOptions: {
          loop: true,
          autoplay: true,
          animationData: AI,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        },
        keyWords:
          "Predictive Analytics | Computer Vision | NLP | AI Platform  | Chatbots | Forecasting & Anamoly detection",
      },
    ],
  },
  {
    id: 2,
    tabName: "Cloud",
    properties: [
      {
        id: 1,
        name: "Cloud Explore",
        img: "",
        description: "Assisted exploration of the Cloud Native world. ",
        defaultOptions: {
          loop: true,
          autoplay: true,
          animationData: Cloudexplore,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        },
        keyWords: "Assessments| Cloud Adoption Roadmap| TCO Analysis| Quick POC| Cloud Foundations",
      },
      {
        id: 2,
        name: "Cloud migrate",
        img: "",
        imgBgColor: "#FFCECE",
        description: "Engage our Cloud Migration Factory on your projects!",
        defaultOptions: {
          loop: true,
          autoplay: true,
          animationData: cloudMigrate,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        },
        keyWords: "Lift and Shift | Re-host and Re-Platform| Windows Servers| Linux Environments| Oracle Apps ",
      },
      {
        id: 3,
        name: "Cloud modernize",
        imgBgColor: "#D6FFAD",
        description: "All aboard the Kubernetes Ship ",
        defaultOptions: {
          loop: true,
          autoplay: true,
          animationData: cloudModernize,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        },
        keyWords:
          "Infrastructure as Code| DevOps Maturity Assessments |CI CD Pipelines |Infra & App Modernization |Multi Cloud |Hybrid Cloud ",
      },
      {
        id: 4,
        name: "Cloud manage",
        imgBgColor: "#D6E4F9",
        description: "Cloud Wellness is a continuum",
        defaultOptions: {
          loop: true,
          autoplay: true,
          animationData: cloudManage,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        },
        keyWords: "Cloud Assessments| Architecture Reviews  | Cost Optimization | Security Audits  | VAPT",
      },
    ],
  },
  {
    id: 3,
    tabName: "App",
    properties: [
      {
        name: "Cloud Native App Development",
        img: "",
        imgBgColor: "#FFCECE",
        description: "Build your products the cloud way",
        defaultOptions: {
          loop: true,
          autoplay: true,
          animationData: native,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        },
        keyWords: "Scoping| Planning| Web  Apps| Mobile  Apps|Serverless",
      },
      {
        name: "App modernize",
        imgBgColor: "#D6FFAD",
        description: "Move your apps to cloud the right way!",
        defaultOptions: {
          loop: true,
          autoplay: true,
          animationData: modernize,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        },
        keyWords: "Lift and Shift| Re-Platform |Open stacks | Serverless",
      },
      {
        name: "Rapid App Prototyping",
        imgBgColor: "#D6E4F9",
        description: "MVP as a service",
        defaultOptions: {
          loop: true,
          autoplay: true,
          animationData: rapid,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        },
        keyWords: "Design | Develop |Prototype ",
      },
      {
        name: "DevOps",
        imgBgColor: "#F2F4B5",
        description: "DevOps",
        defaultOptions: {
          loop: true,
          autoplay: true,
          animationData: devops,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        },
        keyWords: "Cloud Assessments |Architecture Reviews |Cost Optimization |Security Audits |VAPT",
      },
    ],
  },
];
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Cloudexplore,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
