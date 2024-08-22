-- CreateTable
CREATE TABLE "participants" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "is_confirmed" BOOLEAN NOT NULL DEFAULT false,
    "is_owner" BOOLEAN NOT NULL DEFAULT false,
    "trip_Id" TEXT NOT NULL,
    CONSTRAINT "participants_trip_Id_fkey" FOREIGN KEY ("trip_Id") REFERENCES "trips" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
