export interface Include {
    include: {
        parent: {
            include: {
                publisher: {
                    include: {
                        unit: boolean
                    }
                }
            }
        }
        publisher: {
            include: {
                unit: boolean
            }
        }
        isHonoredBy: {
            include: {
                unit: true
            }
        }
        childComments: Include | true | null
    }
}

export default function generateInclude(depth: number): any {
    if (depth <= 0) return null
    return {
        include: {
            parent: {
                include: {
                    publisher: {
                        include: {
                            unit: true
                        }
                    }
                }
            },
            publisher: {
                include: {
                    unit: true
                }
            },
            isHonoredBy: {
                include: {
                    unit: true
                }
            },
            childComments: depth === 1 ? true : generateInclude(depth - 1)
        }
    }
}
