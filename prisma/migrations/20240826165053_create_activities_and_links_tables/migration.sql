-- CreateTable
CREATE TABLE "activities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "occurs_at" DATETIME NOT NULL,
    "trip_Id" TEXT NOT NULL,
    CONSTRAINT "activities_trip_Id_fkey" FOREIGN KEY ("trip_Id") REFERENCES "trips" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "links" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "trip_Id" TEXT NOT NULL,
    CONSTRAINT "links_trip_Id_fkey" FOREIGN KEY ("trip_Id") REFERENCES "trips" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
