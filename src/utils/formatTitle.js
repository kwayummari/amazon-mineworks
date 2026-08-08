export const formatTitle = (slug) =>
  slug
    .replace(/^\//, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
