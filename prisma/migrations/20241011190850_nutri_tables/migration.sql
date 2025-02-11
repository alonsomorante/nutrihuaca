-- CreateTable
CREATE TABLE "cereals" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "energy" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "total_fat" DOUBLE PRECISION NOT NULL,
    "total_carbohydrates" DOUBLE PRECISION NOT NULL,
    "fibra" DOUBLE PRECISION NOT NULL,
    "calcium" DOUBLE PRECISION NOT NULL,
    "fosforo" DOUBLE PRECISION NOT NULL,
    "zinc" DOUBLE PRECISION NOT NULL,
    "iron" DOUBLE PRECISION NOT NULL,
    "sodium" DOUBLE PRECISION NOT NULL,
    "potassium" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "cereals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vegetables" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "energy" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "total_fat" DOUBLE PRECISION NOT NULL,
    "total_carbohydrates" DOUBLE PRECISION NOT NULL,
    "fibra" DOUBLE PRECISION NOT NULL,
    "calcium" DOUBLE PRECISION NOT NULL,
    "fosforo" DOUBLE PRECISION NOT NULL,
    "zinc" DOUBLE PRECISION NOT NULL,
    "iron" DOUBLE PRECISION NOT NULL,
    "sodium" DOUBLE PRECISION NOT NULL,
    "potassium" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "vegetables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fruits" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "energy" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "total_fat" DOUBLE PRECISION NOT NULL,
    "total_carbohydrates" DOUBLE PRECISION NOT NULL,
    "fibra" DOUBLE PRECISION NOT NULL,
    "calcium" DOUBLE PRECISION NOT NULL,
    "fosforo" DOUBLE PRECISION NOT NULL,
    "zinc" DOUBLE PRECISION NOT NULL,
    "iron" DOUBLE PRECISION NOT NULL,
    "sodium" DOUBLE PRECISION NOT NULL,
    "potassium" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "fruits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fats" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "energy" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "total_fat" DOUBLE PRECISION NOT NULL,
    "total_carbohydrates" DOUBLE PRECISION NOT NULL,
    "fibra" DOUBLE PRECISION NOT NULL,
    "calcium" DOUBLE PRECISION NOT NULL,
    "fosforo" DOUBLE PRECISION NOT NULL,
    "zinc" DOUBLE PRECISION NOT NULL,
    "iron" DOUBLE PRECISION NOT NULL,
    "sodium" DOUBLE PRECISION NOT NULL,
    "potassium" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "fats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seafood" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "energy" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "total_fat" DOUBLE PRECISION NOT NULL,
    "total_carbohydrates" DOUBLE PRECISION NOT NULL,
    "fibra" DOUBLE PRECISION NOT NULL,
    "calcium" DOUBLE PRECISION NOT NULL,
    "fosforo" DOUBLE PRECISION NOT NULL,
    "zinc" DOUBLE PRECISION NOT NULL,
    "iron" DOUBLE PRECISION NOT NULL,
    "sodium" DOUBLE PRECISION NOT NULL,
    "potassium" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "seafood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meat" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "energy" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "total_fat" DOUBLE PRECISION NOT NULL,
    "total_carbohydrates" DOUBLE PRECISION NOT NULL,
    "fibra" DOUBLE PRECISION NOT NULL,
    "calcium" DOUBLE PRECISION NOT NULL,
    "fosforo" DOUBLE PRECISION NOT NULL,
    "zinc" DOUBLE PRECISION NOT NULL,
    "iron" DOUBLE PRECISION NOT NULL,
    "sodium" DOUBLE PRECISION NOT NULL,
    "potassium" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "meat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dairy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "energy" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "total_fat" DOUBLE PRECISION NOT NULL,
    "total_carbohydrates" DOUBLE PRECISION NOT NULL,
    "fibra" DOUBLE PRECISION NOT NULL,
    "calcium" DOUBLE PRECISION NOT NULL,
    "fosforo" DOUBLE PRECISION NOT NULL,
    "zinc" DOUBLE PRECISION NOT NULL,
    "iron" DOUBLE PRECISION NOT NULL,
    "sodium" DOUBLE PRECISION NOT NULL,
    "potassium" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "dairy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "drinks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "energy" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "total_fat" DOUBLE PRECISION NOT NULL,
    "total_carbohydrates" DOUBLE PRECISION NOT NULL,
    "fibra" DOUBLE PRECISION NOT NULL,
    "calcium" DOUBLE PRECISION NOT NULL,
    "fosforo" DOUBLE PRECISION NOT NULL,
    "zinc" DOUBLE PRECISION NOT NULL,
    "iron" DOUBLE PRECISION NOT NULL,
    "sodium" DOUBLE PRECISION NOT NULL,
    "potassium" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "drinks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eggs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "energy" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "total_fat" DOUBLE PRECISION NOT NULL,
    "total_carbohydrates" DOUBLE PRECISION NOT NULL,
    "fibra" DOUBLE PRECISION NOT NULL,
    "calcium" DOUBLE PRECISION NOT NULL,
    "fosforo" DOUBLE PRECISION NOT NULL,
    "zinc" DOUBLE PRECISION NOT NULL,
    "iron" DOUBLE PRECISION NOT NULL,
    "sodium" DOUBLE PRECISION NOT NULL,
    "potassium" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "eggs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sugar" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "energy" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "total_fat" DOUBLE PRECISION NOT NULL,
    "total_carbohydrates" DOUBLE PRECISION NOT NULL,
    "fibra" DOUBLE PRECISION NOT NULL,
    "calcium" DOUBLE PRECISION NOT NULL,
    "fosforo" DOUBLE PRECISION NOT NULL,
    "zinc" DOUBLE PRECISION NOT NULL,
    "iron" DOUBLE PRECISION NOT NULL,
    "sodium" DOUBLE PRECISION NOT NULL,
    "potassium" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "sugar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "miscellaneous" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "energy" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "total_fat" DOUBLE PRECISION NOT NULL,
    "total_carbohydrates" DOUBLE PRECISION NOT NULL,
    "fibra" DOUBLE PRECISION NOT NULL,
    "calcium" DOUBLE PRECISION NOT NULL,
    "fosforo" DOUBLE PRECISION NOT NULL,
    "zinc" DOUBLE PRECISION NOT NULL,
    "iron" DOUBLE PRECISION NOT NULL,
    "sodium" DOUBLE PRECISION NOT NULL,
    "potassium" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "miscellaneous_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "legumes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "energy" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "total_fat" DOUBLE PRECISION NOT NULL,
    "total_carbohydrates" DOUBLE PRECISION NOT NULL,
    "fibra" DOUBLE PRECISION NOT NULL,
    "calcium" DOUBLE PRECISION NOT NULL,
    "fosforo" DOUBLE PRECISION NOT NULL,
    "zinc" DOUBLE PRECISION NOT NULL,
    "iron" DOUBLE PRECISION NOT NULL,
    "sodium" DOUBLE PRECISION NOT NULL,
    "potassium" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "legumes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tubers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "energy" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "total_fat" DOUBLE PRECISION NOT NULL,
    "total_carbohydrates" DOUBLE PRECISION NOT NULL,
    "fibra" DOUBLE PRECISION NOT NULL,
    "calcium" DOUBLE PRECISION NOT NULL,
    "fosforo" DOUBLE PRECISION NOT NULL,
    "zinc" DOUBLE PRECISION NOT NULL,
    "iron" DOUBLE PRECISION NOT NULL,
    "sodium" DOUBLE PRECISION NOT NULL,
    "potassium" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "tubers_pkey" PRIMARY KEY ("id")
);
