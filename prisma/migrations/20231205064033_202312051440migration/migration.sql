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
INSERT INTO "new_Question" ("content", "createTime", "goal", "id", "publisherId", "updateTime") SELECT "content", "createTime", "goal", "id", "publisherId", "updateTime" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";
CREATE TABLE "new_Reply" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "publisherId" INTEGER NOT NULL,
    "commentId" INTEGER,
    "createTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Reply_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reply_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Reply" ("commentId", "content", "createTime", "id", "publisherId", "updateTime") SELECT "commentId", "content", "createTime", "id", "publisherId", "updateTime" FROM "Reply";
DROP TABLE "Reply";
ALTER TABLE "new_Reply" RENAME TO "Reply";
CREATE UNIQUE INDEX "Reply_commentId_key" ON "Reply"("commentId");
CREATE TABLE "new_Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "publisherId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "createTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Comment_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Comment_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comment" ("content", "createTime", "id", "publisherId", "questionId", "updateTime") SELECT "content", "createTime", "id", "publisherId", "questionId", "updateTime" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
CREATE TABLE "new_Collections" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "createTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Collections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Collections_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Collections" ("createTime", "id", "questionId", "updateTime", "userId") SELECT "createTime", "id", "questionId", "updateTime", "userId" FROM "Collections";
DROP TABLE "Collections";
ALTER TABLE "new_Collections" RENAME TO "Collections";
CREATE UNIQUE INDEX "Collections_userId_questionId_key" ON "Collections"("userId", "questionId");
CREATE TABLE "new_Unit" (
    "unitId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "unitNo" TEXT NOT NULL,
    "unitName" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Unit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Unit" ("createTime", "unitId", "unitName", "unitNo", "updateTime", "userId") SELECT "createTime", "unitId", "unitName", "unitNo", "updateTime", "userId" FROM "Unit";
DROP TABLE "Unit";
ALTER TABLE "new_Unit" RENAME TO "Unit";
CREATE UNIQUE INDEX "Unit_userId_key" ON "Unit"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
