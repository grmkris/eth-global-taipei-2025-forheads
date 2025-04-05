CREATE TABLE "level_progression" (
	"id" uuid PRIMARY KEY NOT NULL,
	"level" text NOT NULL,
	"user_id" uuid NOT NULL,
	"data" jsonb NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "level_progression" ADD CONSTRAINT "level_progression_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;