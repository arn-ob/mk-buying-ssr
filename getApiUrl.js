export default function getApiUrl() {
  const url = {
    development: "http://localhost:3000",
    production: "https://mk-buying.com",
  }

  const env = process.env.NODE_ENV || "development"
  return url[env]
}
