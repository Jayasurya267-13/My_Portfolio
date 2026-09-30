import { ProfileConfig } from '../types/portfolio';

/**
 * ============================================================
 * JAYASURYA R — ENGINEERING SYSTEM CONFIGURATION
 * All primary personal data, placeholder paths, and links are
 * centralized here for immediate editing and maintenance.
 * ============================================================
 */
export const CONFIG: ProfileConfig = {
  name: "Jayasurya R",
  tagline: "From Silicon to Systems.",
  identityHeadline: "VLSI × HARDWARE × SOFTWARE",
  subHeadline: "Engineering intelligent systems across silicon, hardware and software.",
  institution: "Sri Sai Ram Institute Of Technology",
  degree: "B.E. Electronics and Communication Engineering",
  currentStatus: "3rd Year / 5th Semester",
  location: "Chennai-44, India",
  coordinates: "12.9602° N, 80.0573° E", // Sri Sai Ram Inst / Chennai West coordinates

  // EDITABLE ASSET PLACEHOLDERS:
  // Drop your files in public/assets/... to automatically activate them
  emailPlaceholder: "YOUR_EMAIL_HERE", // Replace with your real email, e.g. "jayasurya.ece@example.com"
  resumePdfPath: "./assets/resume/Jayasurya_R_Resume.pdf",
  photoPath: "./assets/profile/jayasurya_r.jpg",

  socials: {
    github: {
      username: "Jayasurya267-13",
      url: "https://github.com/Jayasurya267-13",
      label: "github.com/Jayasurya267-13"
    },
    linkedin: {
      username: "Jayasurya R",
      url: "https://www.linkedin.com/in/jayasurya-r-b655bb31b",
      label: "linkedin.com/in/jayasurya-r-b655bb31b"
    },
    leetcode: {
      username: "jayasurya2277",
      url: "https://leetcode.com/u/jayasurya2277/",
      label: "leetcode.com/u/jayasurya2277"
    }
  }
};

export const SYSTEM_SPECS = [
  { label: "ROLE", value: "ECE STUDENT / DEVELOPER" },
  { label: "FOCUS", value: "VLSI + IoT + AI + SOFTWARE" },
  { label: "STATUS", value: "3rd YEAR / 5th SEM" },
  { label: "COLLEGE", value: "SRI SAI RAM INST OF TECH" },
  { label: "LOCATION", value: "CHENNAI-44, INDIA" },
  { label: "ARCH", value: "SILICON ⇄ EMBEDDED ⇄ CLOUD" },
];
