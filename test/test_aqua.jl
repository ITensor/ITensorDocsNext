using ITensorDocsNext: ITensorDocsNext
using Aqua: Aqua
using Test: @testset

@testset "Code quality (Aqua.jl)" begin
  Aqua.test_all(ITensorDocsNext)
end
