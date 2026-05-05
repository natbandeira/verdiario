/**
 * @openapi
 * tags:
 *   - name: Estufa
 *     description: Gerenciamento de plantinhas.
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Plant:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         nome:
 *           type: string
 *         nomeCientifico:
 *           type: string
 *         dataChegada:
 *           type: string
 *           format: date
 *         origem:
 *           type: string
 *         dataUltimaAdubacao:
 *           type: string
 *           format: date
 *         tipoAdubo:
 *           type: string
 *         dataUltimoTratamento:
 *           type: string
 *           format: date
 *         tipoTratamento:
 *           type: string
 *         nomePraga:
 *           type: string
 *         plantaAtiva:
 *           type: boolean
 *
 *     CreatePlantInput:
 *       type: object
 *       required:
 *         - nome
 *         - dataChegada
 *         - origem
 *       properties:
 *         nome:
 *           type: string
 *           description: Nome da planta (obrigatório)
 *           example: "Zamioculca"
 *         nomeCientifico:
 *           type: string
 *           description: Nome científico (opcional)
 *         dataChegada:
 *           type: string
 *           format: date
 *           description: Data de chegada (obrigatório)
 *           example: "2024-01-15"
 *         origem:
 *           type: string
 *           description: Origem (obrigatório)
 *           example: "Viveiro"
 *         dataUltimaAdubacao:
 *           type: string
 *           format: date
 *         tipoAdubo:
 *           type: string
 *         dataUltimoTratamento:
 *           type: string
 *           format: date
 *         tipoTratamento:
 *           type: string
 *         nomePraga:
 *           type: string
 *         plantaAtiva:
 *           type: boolean
 *
 *     UpdatePlantInput:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *         nomeCientifico:
 *           type: string
 *         dataChegada:
 *           type: string
 *           format: date
 *         origem:
 *           type: string
 *         dataUltimaAdubacao:
 *           type: string
 *           format: date
 *         tipoAdubo:
 *           type: string
 *         dataUltimoTratamento:
 *           type: string
 *           format: date
 *         tipoTratamento:
 *           type: string
 *         nomePraga:
 *           type: string
 *         plantaAtiva:
 *           type: boolean
 *
 *     DefaultResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         data:
 *           oneOf:
 *             - $ref: '#/components/schemas/Plant'
 *             - type: array
 *               items:
 *                 $ref: '#/components/schemas/Plant'
 *
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         error:
 *           type: object
 */

/**
 * @openapi
 * /api/v1/planta:
 *   post:
 *     summary: Cria uma nova planta
 *     tags: [Plantas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePlantInput'
 *           example:
 *             nome: "Zamioculca"
 *             nomeCientifico: "Zamioculcas zamiifolia"
 *             dataChegada: "2024-01-15"
 *             origem: "Viveiro local"
 *             dataUltimaAdubacao: "2024-02-01"
 *             tipoAdubo: "Orgânico"
 *             dataUltimoTratamento: "2024-02-10"
 *             tipoTratamento: "Inseticida natural"
 *             nomePraga: "Pulgão"
 *             plantaAtiva: true
 *     responses:
 *       201:
 *         description: Planta criada com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro interno
 */

/**
 * @openapi
 * /api/v1/planta/{id}:
 *   get:
 *     summary: Busca uma planta pelo ID
 *     tags: [Plantas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Planta encontrada
 *       404:
 *         description: Planta não encontrada
 *       500:
 *         description: Erro interno
 */

/**
 * @openapi
 * /api/v1/planta/{id}:
 *   put:
 *     summary: Atualiza uma planta
 *     tags: [Plantas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdatePlantInput'
 *           example:
 *             nome: "Zamioculca atualizada"
 *             nomeCientifico: "Zamioculcas zamiifolia"
 *             dataChegada: "2024-01-15"
 *             origem: "Viveiro atualizado"
 *             dataUltimaAdubacao: "2024-03-01"
 *             tipoAdubo: "Químico"
 *             dataUltimoTratamento: "2024-03-05"
 *             tipoTratamento: "Fungicida"
 *             nomePraga: "Cochonilha"
 *             plantaAtiva: true
 *     responses:
 *       200:
 *         description: Planta atualizada com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Planta não encontrada
 *       500:
 *         description: Erro interno
 */

/**
 * @openapi
 * /api/v1/plantas:
 *   get:
 *     summary: Lista todas as plantas da estufa
 *     tags: [Plantas]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 *       500:
 *         description: Erro interno
 */