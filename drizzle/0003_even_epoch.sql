ALTER TABLE "users" ADD COLUMN "nft_contract_address" varchar;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "profile_nft_status" text DEFAULT 'NOT_MINTED' NOT NULL;