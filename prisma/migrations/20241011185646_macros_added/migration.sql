/*
  Warnings:

  - You are about to drop the column `macro` on the `cereals` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `cereals` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `cereals` table. All the data in the column will be lost.
  - You are about to drop the column `macro` on the `dairy` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `dairy` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `dairy` table. All the data in the column will be lost.
  - You are about to drop the column `macro` on the `drinks` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `drinks` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `drinks` table. All the data in the column will be lost.
  - You are about to drop the column `macro` on the `eggs` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `eggs` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `eggs` table. All the data in the column will be lost.
  - You are about to drop the column `macro` on the `fats` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `fats` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `fats` table. All the data in the column will be lost.
  - You are about to drop the column `macro` on the `fruits` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `fruits` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `fruits` table. All the data in the column will be lost.
  - You are about to drop the column `macro` on the `legumes` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `legumes` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `legumes` table. All the data in the column will be lost.
  - You are about to drop the column `macro` on the `meat` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `meat` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `meat` table. All the data in the column will be lost.
  - You are about to drop the column `macro` on the `miscellaneous` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `miscellaneous` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `miscellaneous` table. All the data in the column will be lost.
  - You are about to drop the column `macro` on the `seafood` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `seafood` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `seafood` table. All the data in the column will be lost.
  - You are about to drop the column `macro` on the `sugar` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `sugar` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `sugar` table. All the data in the column will be lost.
  - You are about to drop the column `macro` on the `tubers` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `tubers` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `tubers` table. All the data in the column will be lost.
  - You are about to drop the column `macro` on the `vegetables` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `vegetables` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `vegetables` table. All the data in the column will be lost.
  - Added the required column `calcium` to the `cereals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy` to the `cereals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fibra` to the `cereals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fosforo` to the `cereals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iron` to the `cereals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potassium` to the `cereals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `cereals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `cereals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_carbohydrates` to the `cereals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_fat` to the `cereals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zinc` to the `cereals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calcium` to the `dairy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy` to the `dairy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fibra` to the `dairy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fosforo` to the `dairy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iron` to the `dairy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potassium` to the `dairy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `dairy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `dairy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_carbohydrates` to the `dairy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_fat` to the `dairy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zinc` to the `dairy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calcium` to the `drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy` to the `drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fibra` to the `drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fosforo` to the `drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iron` to the `drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potassium` to the `drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_carbohydrates` to the `drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_fat` to the `drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zinc` to the `drinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calcium` to the `eggs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy` to the `eggs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fibra` to the `eggs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fosforo` to the `eggs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iron` to the `eggs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potassium` to the `eggs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `eggs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `eggs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_carbohydrates` to the `eggs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_fat` to the `eggs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zinc` to the `eggs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calcium` to the `fats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy` to the `fats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fibra` to the `fats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fosforo` to the `fats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iron` to the `fats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potassium` to the `fats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `fats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `fats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_carbohydrates` to the `fats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_fat` to the `fats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zinc` to the `fats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calcium` to the `fruits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy` to the `fruits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fibra` to the `fruits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fosforo` to the `fruits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iron` to the `fruits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potassium` to the `fruits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `fruits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `fruits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_carbohydrates` to the `fruits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_fat` to the `fruits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zinc` to the `fruits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calcium` to the `legumes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy` to the `legumes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fibra` to the `legumes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fosforo` to the `legumes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iron` to the `legumes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potassium` to the `legumes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `legumes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `legumes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_carbohydrates` to the `legumes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_fat` to the `legumes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zinc` to the `legumes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calcium` to the `meat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy` to the `meat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fibra` to the `meat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fosforo` to the `meat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iron` to the `meat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potassium` to the `meat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `meat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `meat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_carbohydrates` to the `meat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_fat` to the `meat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zinc` to the `meat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calcium` to the `miscellaneous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy` to the `miscellaneous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fibra` to the `miscellaneous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fosforo` to the `miscellaneous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iron` to the `miscellaneous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potassium` to the `miscellaneous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `miscellaneous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `miscellaneous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_carbohydrates` to the `miscellaneous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_fat` to the `miscellaneous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zinc` to the `miscellaneous` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calcium` to the `seafood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy` to the `seafood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fibra` to the `seafood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fosforo` to the `seafood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iron` to the `seafood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potassium` to the `seafood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `seafood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `seafood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_carbohydrates` to the `seafood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_fat` to the `seafood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zinc` to the `seafood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calcium` to the `sugar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy` to the `sugar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fibra` to the `sugar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fosforo` to the `sugar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iron` to the `sugar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potassium` to the `sugar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `sugar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `sugar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_carbohydrates` to the `sugar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_fat` to the `sugar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zinc` to the `sugar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calcium` to the `tubers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy` to the `tubers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fibra` to the `tubers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fosforo` to the `tubers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iron` to the `tubers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potassium` to the `tubers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `tubers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `tubers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_carbohydrates` to the `tubers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_fat` to the `tubers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zinc` to the `tubers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calcium` to the `vegetables` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy` to the `vegetables` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fibra` to the `vegetables` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fosforo` to the `vegetables` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iron` to the `vegetables` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potassium` to the `vegetables` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `vegetables` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium` to the `vegetables` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_carbohydrates` to the `vegetables` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_fat` to the `vegetables` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zinc` to the `vegetables` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cereals" DROP COLUMN "macro",
DROP COLUMN "unit",
DROP COLUMN "value",
ADD COLUMN     "calcium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "energy" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fibra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fosforo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "iron" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "potassium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "protein" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sodium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_carbohydrates" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_fat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "zinc" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "dairy" DROP COLUMN "macro",
DROP COLUMN "unit",
DROP COLUMN "value",
ADD COLUMN     "calcium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "energy" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fibra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fosforo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "iron" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "potassium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "protein" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sodium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_carbohydrates" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_fat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "zinc" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "drinks" DROP COLUMN "macro",
DROP COLUMN "unit",
DROP COLUMN "value",
ADD COLUMN     "calcium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "energy" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fibra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fosforo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "iron" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "potassium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "protein" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sodium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_carbohydrates" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_fat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "zinc" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "eggs" DROP COLUMN "macro",
DROP COLUMN "unit",
DROP COLUMN "value",
ADD COLUMN     "calcium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "energy" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fibra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fosforo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "iron" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "potassium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "protein" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sodium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_carbohydrates" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_fat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "zinc" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "fats" DROP COLUMN "macro",
DROP COLUMN "unit",
DROP COLUMN "value",
ADD COLUMN     "calcium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "energy" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fibra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fosforo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "iron" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "potassium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "protein" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sodium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_carbohydrates" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_fat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "zinc" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "fruits" DROP COLUMN "macro",
DROP COLUMN "unit",
DROP COLUMN "value",
ADD COLUMN     "calcium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "energy" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fibra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fosforo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "iron" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "potassium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "protein" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sodium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_carbohydrates" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_fat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "zinc" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "legumes" DROP COLUMN "macro",
DROP COLUMN "unit",
DROP COLUMN "value",
ADD COLUMN     "calcium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "energy" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fibra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fosforo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "iron" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "potassium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "protein" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sodium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_carbohydrates" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_fat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "zinc" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "meat" DROP COLUMN "macro",
DROP COLUMN "unit",
DROP COLUMN "value",
ADD COLUMN     "calcium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "energy" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fibra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fosforo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "iron" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "potassium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "protein" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sodium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_carbohydrates" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_fat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "zinc" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "miscellaneous" DROP COLUMN "macro",
DROP COLUMN "unit",
DROP COLUMN "value",
ADD COLUMN     "calcium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "energy" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fibra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fosforo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "iron" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "potassium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "protein" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sodium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_carbohydrates" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_fat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "zinc" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "seafood" DROP COLUMN "macro",
DROP COLUMN "unit",
DROP COLUMN "value",
ADD COLUMN     "calcium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "energy" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fibra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fosforo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "iron" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "potassium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "protein" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sodium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_carbohydrates" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_fat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "zinc" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "sugar" DROP COLUMN "macro",
DROP COLUMN "unit",
DROP COLUMN "value",
ADD COLUMN     "calcium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "energy" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fibra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fosforo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "iron" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "potassium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "protein" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sodium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_carbohydrates" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_fat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "zinc" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "tubers" DROP COLUMN "macro",
DROP COLUMN "unit",
DROP COLUMN "value",
ADD COLUMN     "calcium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "energy" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fibra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fosforo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "iron" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "potassium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "protein" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sodium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_carbohydrates" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_fat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "zinc" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "vegetables" DROP COLUMN "macro",
DROP COLUMN "unit",
DROP COLUMN "value",
ADD COLUMN     "calcium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "energy" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fibra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fosforo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "iron" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "potassium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "protein" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sodium" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_carbohydrates" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_fat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "zinc" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "Macros" (
    "id" SERIAL NOT NULL,
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

    CONSTRAINT "Macros_pkey" PRIMARY KEY ("id")
);
