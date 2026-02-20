using Aqua: Aqua
using ITensorDocsNext: ITensorDocsNext
using Test: @testset

@testset "Code quality (Aqua.jl)" begin
    Aqua.test_all(ITensorDocsNext)
end
