-- CreateTable
CREATE TABLE "Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "goal" TEXT NOT NULL DEFAULT '',
    "publisherId" INTEGER NOT NULL,
    "createTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" DATETIME NOT NULL,
    CONSTRAINT "Question_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "publisherId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "createTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" DATETIME NOT NULL,
    CONSTRAINT "Comment_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Comment_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Reply" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "publisherId" INTEGER NOT NULL,
    "commentId" INTEGER,
    "createTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" DATETIME NOT NULL,
    CONSTRAINT "Reply_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reply_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "avator" TEXT,
    "userName" TEXT NOT NULL,
    "policeNo" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "unitId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Unit" (
    "unitId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "unitNo" TEXT NOT NULL,
    "unitName" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" DATETIME NOT NULL,
    CONSTRAINT "Unit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Collections" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "createTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" DATETIME NOT NULL,
    CONSTRAINT "Collections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Collections_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Reply_commentId_key" ON "Reply"("commentId");

-- CreateIndex
CREATE UNIQUE INDEX "Unit_userId_key" ON "Unit"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Collections_userId_questionId_key" ON "Collections"("userId", "questionId");
