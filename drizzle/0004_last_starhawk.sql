CREATE TABLE "items" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"image" text,
	"token_id" varchar,
	"contract_address" varchar,
	"mint_status" text DEFAULT 'NOT_MINTED' NOT NULL,
	"transaction_hash" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "level_progression" ADD COLUMN "level_index" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "item_nft_contract_address" varchar;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "item_nft_status" text DEFAULT 'NOT_MINTED' NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD CONSTRAINT "items_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;