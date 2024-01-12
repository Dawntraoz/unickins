export type SocialLink = {
  social:
    | "twitter"
    | "linkedin"
    | "instagram"
    | "tiktok"
    | "twitch"
    | "youtube"
    | "discord";
  href: string;
  text: string;
  icon: string;
};

const socialLinks: SocialLink[] = [
  {
    social: "linkedin",
    href: "https://linkedin.com/in/dawntraoz/",
    text: "Alba Silvente Fuentes's LinkedIn account",
    icon: "social/linkedin",
  },
  {
    social: "twitter",
    href: "https://twitter.com/dawntraoz",
    text: "Follow @dawntraoz on Twitter",
    icon: "social/twitter",
  },
  {
    social: "instagram",
    href: "https://instagram.com/dawntraoz",
    text: "Follow @dawntraoz on Instagram",
    icon: "social/instagram",
  },
  {
    social: "tiktok",
    href: "https://tiktok.com/@dawntraoz",
    text: "Follow @dawntraoz on TikTok",
    icon: "social/tiktok",
  },
  {
    social: "twitch",
    href: "https://twitch.tv/dawntraoz",
    text: "Follow @dawntraoz on Twitch",
    icon: "social/twitch",
  },
  {
    social: "youtube",
    href: "https://youtube.com/@dawntraoz",
    text: "Subscribe to @dawntraoz on YouTube",
    icon: "social/youtube",
  },
];

export default socialLinks;
