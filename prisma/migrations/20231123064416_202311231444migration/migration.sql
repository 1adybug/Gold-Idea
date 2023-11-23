/*
  Warnings:

  - Added the required column `questionId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Unit` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comment" (
    "commentId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "createTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Comment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Question" ("questionId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comment" ("commentId", "content", "createTime", "updateTime") SELECT "commentId", "content", "createTime", "updateTime" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
CREATE TABLE "new_User" (
    "userId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "avator" TEXT,
    "userName" TEXT NOT NULL,
    "policeNo" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "unitId" INTEGER NOT NULL,
    CONSTRAINT "User_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Question" ("questionId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Comment" ("commentId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("avator", "phone", "policeNo", "userId", "userName") SELECT "avator", "phone", "policeNo", "userId", "userName" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE TABLE "new_Unit" (
    "unitId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "unitNo" TEXT NOT NULL,
    "unitName" TEXT NOT NULL,
    "createTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Unit_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "User" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Unit" ("createTime", "unitId", "unitName", "unitNo", "updateTime") SELECT "createTime", "unitId", "unitName", "unitNo", "updateTime" FROM "Unit";
DROP TABLE "Unit";
ALTER TABLE "new_Unit" RENAME TO "Unit";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
