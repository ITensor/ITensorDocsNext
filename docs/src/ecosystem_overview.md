# ITensor ecosystem overview

```mermaid
graph TD
    ITensors(ITensors.jl) --> ITensorBase(ITensorBase.jl)
    ITensorBase --> NamedDimsArrays(NamedDimsArrays.jl)
    NamedDimsArrays --> SparseArraysBase(SparseArraysBase.jl)
    NamedDimsArrays --> DiagonalArrays(DiagonalArrays.jl)
    NamedDimsArrays --> BlockSparseArrays(BlockSparseArrays.jl)
    NamedDimsArrays --> FusionTensors(FusionTensors.jl)
    BlockSparseArrays --> SparseArraysBase
    BlockSparseArrays --> DiagonalArrays
    BlockSparseArrays --> GradedUnitRanges(GradedUnitRanges.jl)
    DiagonalArrays --> SparseArraysBase
    FusionTensors --> BlockSparseArrays
    FusionTensors --> GradedUnitRanges
    GradedUnitRanges --> SymmetrySectors(SymmetrySectors.jl)
```
