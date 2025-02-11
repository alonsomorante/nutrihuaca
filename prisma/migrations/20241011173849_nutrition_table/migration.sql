-- CreateTable
CREATE TABLE "cereals" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "macro" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "cereals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vegetables" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "macro" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "vegetables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fruits" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "macro" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "fruits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fats" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "macro" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "fats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seafood" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "macro" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "seafood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meat" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "macro" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "meat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dairy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "macro" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "dairy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "drinks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "macro" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "drinks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eggs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "macro" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "eggs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sugar" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "macro" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "sugar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "miscellaneous" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "macro" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "miscellaneous_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "legumes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "macro" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "legumes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tubers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "macro" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "tubers_pkey" PRIMARY KEY ("id")
);
