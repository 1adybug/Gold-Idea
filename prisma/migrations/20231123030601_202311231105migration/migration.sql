-- CreateTable
CREATE TABLE "Question" (
    "questionId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "goal" TEXT NOT NULL DEFAULT '',
    "createTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "User" (
    "userId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "avator" TEXT,
    "userName" TEXT NOT NULL,
    "policeNo" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    CONSTRAINT "User_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Question" ("questionId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Comment" ("commentId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Comment" (
    "commentId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "createTime" DATETIME NOT NULL,
    "updateTime" DATETIME NOT NULL,
    CONSTRAINT "Comment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Question" ("questionId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Unit" (
    "unitId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "unitNo" TEXT NOT NULL,
    "unitName" TEXT NOT NULL,
    "createTime" TEXT NOT NULL,
    "updateTime" TEXT NOT NULL,
    CONSTRAINT "Unit_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "User" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
