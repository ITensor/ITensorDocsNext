# ITensor Ecosystem Overview

```mermaid
graph TD
    ITensorNetworks(ITensorNetworks.jl) --> ITensors(ITensors.jl)
    ITensorNetworks --> DataGraphs(DataGraphs.jl)
    DataGraphs --> NamedGraphs(NamedGraphs.jl)
    ITensors --> ITensorBase(ITensorBase.jl)
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
