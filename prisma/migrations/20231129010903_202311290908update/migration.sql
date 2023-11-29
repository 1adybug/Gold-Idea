/*
  Warnings:

  - You are about to drop the column `questionId` on the `User` table. All the data in the column will be lost.
  - Added the required column `publisherId` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "goal" TEXT NOT NULL DEFAULT '',
    "publisherId" INTEGER NOT NULL,
    "createTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Question_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Question" ("content", "createTime", "goal", "id", "updateTime") SELECT "content", "createTime", "goal", "id", "updateTime" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "avator" TEXT,
    "userName" TEXT NOT NULL,
    "policeNo" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "commentId" INTEGER NOT NULL,
    "unitId" INTEGER NOT NULL,
    CONSTRAINT "User_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("avator", "commentId", "id", "phone", "policeNo", "unitId", "userName") SELECT "avator", "commentId", "id", "phone", "policeNo", "unitId", "userName" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_commentId_key" ON "User"("commentId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
