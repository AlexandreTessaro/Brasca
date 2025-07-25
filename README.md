# Brasca
A fully collateralized BRL-pegged stablecoin designed for fast, low-cost and transparent transactions in the Brazilian crypto ecosystem.

brasca/
├── contracts/               # Smart contracts Solidity
│   ├── BrascaBRL.sol
│   ├── BrascaUSD.sol (futuro)
│   └── utils/               # Libs e contratos auxiliares
├── scripts/                 # Scripts de deploy e automações
│   └── deploy_brasca.js
├── test/                    # Testes com Hardhat/Chai
│   └── brasca.test.js
├── backend/                 # API para integração (emitir, consultar, etc.)
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   └── app.js
│   └── package.json
├── frontend/                # Interface web
│   ├── pages/
│   ├── components/
│   ├── services/
│   └── tailwind.config.js
├── docs/                    # Documentação técnica
│   ├── architecture.md
│   └── roadmap.md
├── .env.example             # Variáveis de ambiente modelo
├── hardhat.config.js        # Configuração do Hardhat
├── README.md