"use server"

import { Score } from "@prisma/client";
import { prisma } from "../../prisma/prisma"

export const getLeaderboard = async () => {
    return await prisma.score.findMany({
        orderBy: {
            score: "desc",
        },
        take: 10,
    });
}

export const addToLeaderboard = async (data: Omit<Score, "id" | "createdAt">) => {
    return await prisma.score.create({
        data
    });
}