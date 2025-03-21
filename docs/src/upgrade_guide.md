# Upgrade Guide

## ITensors.jl

### Deletions, deprecations

- `IndexSet` (deleted).
- `commonind(a::ITensor, b::ITensor)` now errors if there is no common index, before it returned `nothing`. Maybe define `checkcommonind`?
- `adjoint(is::Tuple{Vararg{Index}})`: deleted, use `prime.(is)`.
- `inds` kwarg of `swapprime`, `replaceprime`, etc. for filtering.
- `uniqueinds(a::ITensor, is::Indices)`: remove in favor of `setdiff(inds(a), is)`.
- `unioninds(is1:: Indices, is2::Indices)`: remove in favor of `union(is1, is2)`.
- `hassameinds(is1:: Indices, is2::Indices)`: remove in favor of `issetequal(is1, is2)`.
- `hassameinds(a:: ITensor, is::Indices)`: remove in favor of `issetequal(inds(a), is)`.
- `!(is:: Indices)`: delete.
- `ITensors.using_auto_fermion`: removed for now.

### Removal of sublibraries

- `ITensors.ContractionSequenceOptimization` (functionality moved to ITensorNetworks.jl).
- `ITensors.ITensorVisualizationCore` (plan to move to external VisualizationInterface.jl package).
- `ITensors.LazyApply` (move to QuantumOperatorAlgebra.jl).
- `ITensors.Ops` (move to QuantumOperatorAlgebra.jl).
- `ITensors.QuantumNumbers` (move to GradedArrays.jl).
- `ITensors.SiteTypes` (move to QuantumOperatorAlgebra.jl).
- `ITensors.SmallStrings` (delete, no replacement, just using `String`/`Symbol`).
- `ITensors.TagSets` (delete, no replacement, just using `Dict`, `String`, `Symbol`, etc.).

## ITensorMPS.jl

### Deletions, deprecations, changed behavior

- `ITensorMPS.productMPS`: deleted.
- Output of `siteinds(::MPS)`: if there is no site index, what did it output? Right now it errors.
- Output of `siteinds(::MPS, j::Int)`: if there is no site index, what did it output? Right now it errors.
- `ITensorMPS.MPS:` swap ordering of `sites, state` -> `state, sites`.
- `ITensorMPS.MPS([::Type{ElT} = Float64, ]sites; linkdims=1)`: Made an MPS with empty tensors of a certain bond dimension, probably not a good idea to begin with since it is hard to define when QN symmetries are involved. Maybe define it to be a product state of `”0”`.
- `ITensorMPS.random_mps`: `linkdims` changed to `maxdim`.
