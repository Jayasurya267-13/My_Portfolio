import { JourneyItem } from '../types/portfolio';

export const JOURNEY_ITEMS: JourneyItem[] = [
  {
    id: "space-antenna-internship",
    period: "PRACTICAL EXPOSURE / LEARNING",
    title: "Space Technology & Antenna Design Exposure",
    organization: "Technical Internship / Practical Learning Track",
    category: "INTERNSHIP / EXPOSURE",
    description: "Hands-on exposure to space communication sub-systems, payload telemetry links, and electromagnetic RF antenna modeling using CST Studio Suite. Explored conformal geometry, radiation patterns, and orbital communication links.",
    badges: ["Space Tech", "Antenna Modeling", "CST Studio Suite", "RF Engineering"],
    statusNote: "Practical exposure in RF antenna concepts and space communications."
  },
  {
    id: "ham-radio-license",
    period: "OFFICIAL GOVERNMENT CREDENTIAL",
    title: "Amateur / Ham Radio License Holder",
    organization: "Ministry of Communications / Wireless Planning & Coordination (WPC)",
    category: "CREDENTIAL",
    description: "Certified amateur radio operator licensed to transmit and experiment on designated amateur radio frequency bands. Gained practical experience in radio wave propagation, transceiver tuning, modulation schemes, and emergency communications.",
    badges: ["Ham Radio License", "RF Regulations", "Propagation", "VHF/UHF Comms"],
    statusNote: "Licensed Amateur Radio Operator",
    metricPlaceholder: {
      key: "callsign",
      label: "OPERATOR STATUS",
      value: "LICENSED HAM OPERATOR",
      isEditablePlaceholder: false
    }
  },
  {
    id: "leetcode-coding",
    period: "CONTINUOUS PRACTICE",
    title: "Data Structures & Algorithmic Problem Solving",
    organization: "LeetCode & Competitive Problem Solving",
    category: "ALGORITHMS",
    description: "Active algorithmic practice focusing on arrays, two pointers, graphs, binary trees, dynamic programming, and greedy optimization in Python and Java to build rigorous problem-solving fundamentals.",
    badges: ["Data Structures", "Algorithms", "Python", "Java", "Time/Space Optimization"],
    statusNote: "Daily engineering discipline",
    metricPlaceholder: {
      key: "leetcode-stats",
      label: "LEETCODE SOLVED",
      value: "[UPDATE SOLVED COUNT]", // Editable placeholder as requested
      isEditablePlaceholder: true
    }
  }
];

export const LEETCODE_CONFIG = {
  profileUrl: "https://leetcode.com/u/jayasurya2277/",
  username: "jayasurya2277",
  solvedCountPlaceholder: "[UPDATE SOLVED COUNT]", // Easily replace with e.g. "150+"
  streakDaysPlaceholder: "[UPDATE STREAK]",       // Easily replace with e.g. "45 Days"
  focusTopics: ["Arrays & Hash Maps", "Two Pointers", "Graph Traversal", "Trees & Recursion", "Binary Search"]
};
