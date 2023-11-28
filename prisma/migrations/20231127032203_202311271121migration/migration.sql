-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "userId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "avator" TEXT,
    "userName" TEXT NOT NULL,
    "policeNo" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL DEFAULT 0,
    "unitId" INTEGER NOT NULL,
    CONSTRAINT "User_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Question" ("questionId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Comment" ("commentId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("avator", "phone", "policeNo", "unitId", "userId", "userName") SELECT "avator", "phone", "policeNo", "unitId", "userId", "userName" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
