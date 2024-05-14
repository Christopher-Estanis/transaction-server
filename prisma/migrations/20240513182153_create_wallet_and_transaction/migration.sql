-- CreateTable
CREATE TABLE "Wallet" (
    "id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "balance" BIGINT NOT NULL,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" INTEGER NOT NULL,
    "payee" INTEGER NOT NULL,
    "payer" INTEGER NOT NULL,
    "value" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_email_key" ON "Wallet"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_cpf_key" ON "Wallet"("cpf");
