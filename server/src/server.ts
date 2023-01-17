import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get("/dados", () => {
    const all = prisma.habit.findMany()
    return all
})

app.listen({
    port: 3333
})