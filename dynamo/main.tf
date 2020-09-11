module "dynamodb_table" {
  source   = "terraform-aws-modules/dynamodb-table/aws"

  name     = "customers"
  hash_key = "dni"

  attributes = [
    {
      name = "dni"
      type = "N"
    }
  ]

  tags = {
    Terraform   = "true"
    Environment = "staging"
  }
}

provider "aws" {
  profile = "default"
  region  = "us-east-1"
}