resource "google_app_engine_application" "app" {
  project     = "pinesconf"
  location_id = "us-central"
}

provider "aws" {
  profile = "default"
  region  = "us-east-1"
}