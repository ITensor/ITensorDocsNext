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
    NamedDimsArrays --> GradedArrays(GradedArrays.jl)
    NamedDimsArrays --> FusionTensors(FusionTensors.jl)
    FusionTensors --> GradedArrays
    GradedArrays --> BlockSparseArrays
    BlockSparseArrays --> SparseArraysBase
    BlockSparseArrays --> DiagonalArrays
    DiagonalArrays --> SparseArraysBase
```
