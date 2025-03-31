var documenterSearchIndex = {"docs":
[{"location":"upgrade_guide/#Upgrade-Guide","page":"Upgrade Guide","title":"Upgrade Guide","text":"","category":"section"},{"location":"upgrade_guide/#ITensors.jl","page":"Upgrade Guide","title":"ITensors.jl","text":"","category":"section"},{"location":"upgrade_guide/#Deletions,-deprecations","page":"Upgrade Guide","title":"Deletions, deprecations","text":"","category":"section"},{"location":"upgrade_guide/","page":"Upgrade Guide","title":"Upgrade Guide","text":"commonind(a::ITensor, b::ITensor) now errors if there is no common index, before it returned nothing. Maybe define checkcommonind?\nadjoint(is::Tuple{Vararg{Index}}): deleted, use prime.(is).\ninds kwarg of swapprime, replaceprime, etc. for filtering.\nuniqueinds(a::ITensor, is::Indices): remove in favor of setdiff(inds(a), is).\nunioninds(is1:: Indices, is2::Indices): remove in favor of union(is1, is2).\nhassameinds(is1:: Indices, is2::Indices): remove in favor of issetequal(is1, is2).\nhassameinds(a:: ITensor, is::Indices): remove in favor of issetequal(inds(a), is).\n!(is:: Indices): delete.\nITensors.using_auto_fermion: removed for now.\nITensors.TagSets.TagSet/ITensors.TagSets.@ts_str were used to parse string inputs like \"a,b,c\" into sets of tags {\"a\", \"b\", \"c\"}, either at runtime or compile time. With the new named tag/tag dict design introduced in #20 it isn't clear if we want or need that/what the syntax would be. For now we should remove uses of that and reassess bringing those back as needed.\nITensors.OneITensor should be deleted in favor of a scalar ITensor type. I think it is just internal so doesn't need to be deprecated, but we'll need to see where it is being used and change those parts of the code.\nITensors.IndexSet has been deprecated for a while but is still around for backwards compatibility, we should delete it. It could be replaced by an internal typedef struct IndexCollection = Union{Vector{<:Index},Tuple{Vararg{Index}}}.\nITensors.Apply is a lazy version of ITensors.apply/ITensors.product for applying operator-like ITensors/tensor networks as linear maps. Decide if we still want/need that and if not delete it or deprecate it.\nITensors.order/NDTensors.order was a different name for Base.ndims, I think we should deprecate it and just use Base.ndims (same for the compile time version ITensors.Order, which could be NDims if needed).\nITensors.permute(a, (j, i)) for permuting the ITensor data to a certain ordering. Deprecate in favor of NamedDimsArrays.aligndims.\nITensors.dim was the name for getting the length of Index and ITensor, we should deprecate it and just use Base.length and Base.to_dim instead.\nITensors.complex! was an in-place version of Base.complex for ITensors. I think it can be deprecated/removed.","category":"page"},{"location":"upgrade_guide/#Behavior-changes","page":"Upgrade Guide","title":"Behavior changes","text":"","category":"section"},{"location":"upgrade_guide/","page":"Upgrade Guide","title":"Upgrade Guide","text":"ITensors.ITensor(a::AbstractArray, inds): previously it reshaped the input a to match the shape of inds. However, I think we should be strict about the shapes, especially since reshaping doesn't necessarily make sense, or at least is a lot more subtle, for certain backend arrays like BlockSparseArrays and FusionTensors. see #31.","category":"page"},{"location":"upgrade_guide/#Plan-to-bring-back","page":"Upgrade Guide","title":"Plan to bring back","text":"","category":"section"},{"location":"upgrade_guide/","page":"Upgrade Guide","title":"Upgrade Guide","text":"HDF5 saving and loading over ITensors, BlockSparseArrays, etc.\nITensors.delta/ITensors.δ constructors for constructing diagonal ITensors with uniform diagonal values of 1. They should be overloads/wrappers around the same functions in DiagonalArrays.jl, see https://github.com/ITensor/DiagonalArrays.jl/pull/6.\nNDTensors.BackendSelection.Algorithm/NDTensors.BackendSelection.@Algorithm_str should be removed from here and moved to a new package BackendSelection.jl.\nNDTensors.denseblocks was defined in NDTensors.jl to convert a block sparse array to the same block sparse array structure but with dense blocks (say of the blocks themselves were diagonal or sparse in some other way). I think this is useful, it should be defined in BlockSparseArrays.jl and based on a generic function dense in SparseArraysBase.jl that can generically convert a sparse array to dense while trying to preserve properties of the sparse array, like if it was allocated on GPU originally.\nITensors.apply/ITensors.product for applying operator-like ITensors/tensor networks as linear maps. These should get reimplemented in terms of a more general index mapping system, since they rely heavily on prime levels and implicit conventions around those.\nITensors.splitblocks was used to split the blocks of a block sparse tensor in a certain dimension down to blocks of length 1, which is useful for making Hamiltonian tensor network operators more sparse. Define something similar in BlockSparseArrays.jl (maybe consider a different name but I can't think of a better one).\nITensors.factorize was used as a convenient abstraction layer on top of SVD, QR, eigen, etc. to select the best factorization based on the desired orthogonality and truncation. Bring something like that back in MatrixAlgebra.jl/TensorAlgebra.jl and wrap it in NamedDimsArrays.jl. An initial stand-in version to start getting ITensorMPS.jl functionality working was started in #15.","category":"page"},{"location":"upgrade_guide/#Moved-to-a-separate-package","page":"Upgrade Guide","title":"Moved to a separate package","text":"","category":"section"},{"location":"upgrade_guide/","page":"Upgrade Guide","title":"Upgrade Guide","text":"ITensorBase.jl defines ITensorBase.hasqns for checking if an Index or ITensor has symmetry sectors/is graded (see https://github.com/ITensor/ITensorBase.jl/pull/28), probably we want to move that functionality for checking the existence of symmetry sectors to GradedUnitRanges.jl, maybe with a new name consistent with the terminology there like has_symmetry_sectors, isgraded, etc.\nITensors.dag has been moved to GradedUnitRanges.jl for now, maybe consider loading and reexporting it from here. For unit ranges, it is aliased with GradedUnitRanges.dual. Also, maybe consider just using dual and removing dag entirely.\nITensors.ContractionSequenceOptimization has an optimal contraction sequence finder, that should be split off into a more general package.\nITensors.@debug_check should be defined in a separate package, such as DebugChecks.jl (see also see https://github.com/Ferrite-FEM/Ferrite.jl/blob/v1.0.0/src/utils.jl, https://docs.julialang.org/en/v1/stdlib/Logging). For now its usage is being removed and we can bring back debug checks later.\nNDTensors.random_unitary: bring back in MatrixAlgebraKit.jl/TensorAlgebra.jl, etc. There is a simplistic version in QuantomOperatorDefinitions.jl but the implementation should be moved out to a library where it can be shared.","category":"page"},{"location":"upgrade_guide/#Bring-back-with-a-new-name-and-deprecate-the-old-name","page":"Upgrade Guide","title":"Bring back with a new name and deprecate the old name","text":"","category":"section"},{"location":"upgrade_guide/","page":"Upgrade Guide","title":"Upgrade Guide","text":"ITensors.directsum needs to be brought back. We may only need to define Base.cat for NamedDimsArrays.AbstractNamedDimsArray where you can specify named dimensions to direct sum, but the interface is a bit different so directsum could be a more convenient interface for Base.cat. For now I'll start by keeping things minimal and just define a named dimension version of Base.cat, and see if we need directsum, and if not we can deprecate it.\nITensors.diag_itensor should be brought back, but it should be renamed to diagonalarray, i.e. diagonalarray(diag, i, j, k), which should be an overload of the function with the same name that we will define in DiagonalArrays.jl, see https://github.com/ITensor/DiagonalArrays.jl/issues/8.\nITensors.onehot should get deprecated and renamed to SparseArraysBase.oneelement, see https://github.com/ITensor/SparseArraysBase.jl/issues/24. Started implementing in https://github.com/ITensor/ITensorBase.jl/pull/4, https://github.com/ITensor/ITensorBase.jl/pull/26.\nNDTensors.enable_threaded_blocksparse/NDTensors.disable_threaded_blocksparse (also callable as ITensors.f). Probably this will be turned into a contraction backend of BlockSparseArrays, and will have a different interface.","category":"page"},{"location":"upgrade_guide/#Removal-of-sublibraries","page":"Upgrade Guide","title":"Removal of sublibraries","text":"","category":"section"},{"location":"upgrade_guide/","page":"Upgrade Guide","title":"Upgrade Guide","text":"ITensors.ContractionSequenceOptimization (functionality moved to ITensorNetworks.jl).\nITensors.ITensorVisualizationCore (plan to move to external VisualizationInterface.jl package).\nITensors.LazyApply (move to QuantumOperatorAlgebra.jl).\nITensors.Ops (move to QuantumOperatorAlgebra.jl).\nITensors.QuantumNumbers (move to GradedArrays.jl).\nITensors.SiteTypes (move to QuantumOperatorAlgebra.jl).\nITensors.SmallStrings (delete, no replacement, just using String/Symbol).\nITensors.TagSets (delete, no replacement, just using Dict, String, Symbol, etc.).","category":"page"},{"location":"upgrade_guide/#Maybe-bring-back","page":"Upgrade Guide","title":"Maybe bring back","text":"","category":"section"},{"location":"upgrade_guide/","page":"Upgrade Guide","title":"Upgrade Guide","text":"ITensors.Index(length::Int, tags::String) has been removed for now, since tags were changed to a dictionary structure in #20 so it isn't clear what the string parsing should do. We could bring back tag sets for backwards compatibility but I wanted to assess the new design first and keep the constructors minimal.\nITensors.hasind(a, i)/ITensors.hasinds(a, is). I'm in favor of deprecating these in favor of i ∈ inds(a) and is ⊆ inds(a), we can remove them for now and bring them back as deprecations.\nITensors.itensor was a constructor that tried to make a view of the input data, while ITensor was a copying constructor. For now I removed that distinction and am just using ITensor. We can assess if itensor is needed, and either bring it back or deprecate it.\nITensors.outer/NDTensors.outer was functionality for getting outer products of tensors. Either bring it back in TensorAlgebra.jl in some form, or get rid of it and just use TensorAlgebra.contract (see https://github.com/ITensor/TensorAlgebra.jl/issues/17).\nITensors.contract[!]. Currently we just have *, and contract is defined in TensorAlgebra.jl as TensorsAlgebra.contract. Consider just using *, and LinearAlgebra.mul!/ArrayLayouts.muladd! for in-place contraction of named dimension arrays. Also, decide what to do about non-binary/network contractions.\nNDTensors.enable_auto_fermion, NDTensors.using_auto_fermion, etc. need to be brought back in some form once we start reimplementing the automatic fermion sign system in the new code.\nITensors.convert_leaf_eltype to convert the scalar type of nested data structures. Find a better name or just use Adapt.adapt for that functionality.","category":"page"},{"location":"upgrade_guide/#ITensorMPS.jl","page":"Upgrade Guide","title":"ITensorMPS.jl","text":"","category":"section"},{"location":"upgrade_guide/#Deletions,-deprecations,-changed-behavior","page":"Upgrade Guide","title":"Deletions, deprecations, changed behavior","text":"","category":"section"},{"location":"upgrade_guide/","page":"Upgrade Guide","title":"Upgrade Guide","text":"ITensorMPS.productMPS: deleted.\nOutput of siteinds(::MPS): if there is no site index, what did it output? Right now it errors.\nOutput of siteinds(::MPS, j::Int): if there is no site index, what did it output? Right now it errors.\nITensorMPS.MPS: swap ordering of sites, state -> state, sites.\nITensorMPS.MPS([::Type{ElT} = Float64, ]sites; linkdims=1): Made an MPS with empty tensors of a certain bond dimension, probably not a good idea to begin with since it is hard to define when QN symmetries are involved. Maybe define it to be a product state of ”0”.\nITensorMPS.random_mps: linkdims changed to maxdim.","category":"page"},{"location":"upgrade_guide/","page":"Upgrade Guide","title":"Upgrade Guide","text":"","category":"page"},{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [ITensorDocsNext]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"","category":"page"},{"location":"","page":"Documentation for in-progress rewrite of the ITensor ecosystem","title":"Documentation for in-progress rewrite of the ITensor ecosystem","text":"EditURL = \"../../examples/README.jl\"","category":"page"},{"location":"#Documentation-for-in-progress-rewrite-of-the-ITensor-ecosystem","page":"Documentation for in-progress rewrite of the ITensor ecosystem","title":"Documentation for in-progress rewrite of the ITensor ecosystem","text":"","category":"section"},{"location":"","page":"Documentation for in-progress rewrite of the ITensor ecosystem","title":"Documentation for in-progress rewrite of the ITensor ecosystem","text":"A preview of the documentation for an in-progress rewrite of the ITensor Julia ecosystem. You can find the documentation here.","category":"page"},{"location":"#Support","page":"Documentation for in-progress rewrite of the ITensor ecosystem","title":"Support","text":"","category":"section"},{"location":"","page":"Documentation for in-progress rewrite of the ITensor ecosystem","title":"Documentation for in-progress rewrite of the ITensor ecosystem","text":"<img class=\"display-light-only\" src=\"assets/CCQ.png\" width=\"20%\" alt=\"Flatiron Center for Computational Quantum Physics logo.\"/>\n<img class=\"display-dark-only\" src=\"assets/CCQ-dark.png\" width=\"20%\" alt=\"Flatiron Center for Computational Quantum Physics logo.\"/>","category":"page"},{"location":"","page":"Documentation for in-progress rewrite of the ITensor ecosystem","title":"Documentation for in-progress rewrite of the ITensor ecosystem","text":"ITensor is supported by the Flatiron Institute, a division of the Simons Foundation.","category":"page"},{"location":"","page":"Documentation for in-progress rewrite of the ITensor ecosystem","title":"Documentation for in-progress rewrite of the ITensor ecosystem","text":"","category":"page"},{"location":"","page":"Documentation for in-progress rewrite of the ITensor ecosystem","title":"Documentation for in-progress rewrite of the ITensor ecosystem","text":"This page was generated using Literate.jl.","category":"page"},{"location":"","page":"Documentation for in-progress rewrite of the ITensor ecosystem","title":"Documentation for in-progress rewrite of the ITensor ecosystem","text":"","category":"page"},{"location":"ecosystem_overview/#ITensor-Ecosystem-Overview","page":"ITensor Ecosystem Overview","title":"ITensor Ecosystem Overview","text":"","category":"section"},{"location":"ecosystem_overview/","page":"ITensor Ecosystem Overview","title":"ITensor Ecosystem Overview","text":"graph TD\n    ITensorNetworks(ITensorNetworks.jl) --> ITensors(ITensors.jl)\n    ITensorNetworks --> DataGraphs(DataGraphs.jl)\n    DataGraphs --> NamedGraphs(NamedGraphs.jl)\n    ITensors --> ITensorBase(ITensorBase.jl)\n    ITensorBase --> NamedDimsArrays(NamedDimsArrays.jl)\n    NamedDimsArrays --> SparseArraysBase(SparseArraysBase.jl)\n    NamedDimsArrays --> DiagonalArrays(DiagonalArrays.jl)\n    NamedDimsArrays --> BlockSparseArrays(BlockSparseArrays.jl)\n    NamedDimsArrays --> FusionTensors(FusionTensors.jl)\n    BlockSparseArrays --> SparseArraysBase\n    BlockSparseArrays --> DiagonalArrays\n    BlockSparseArrays --> GradedUnitRanges(GradedUnitRanges.jl)\n    DiagonalArrays --> SparseArraysBase\n    FusionTensors --> BlockSparseArrays\n    FusionTensors --> GradedUnitRanges\n    GradedUnitRanges --> SymmetrySectors(SymmetrySectors.jl)","category":"page"},{"location":"ecosystem_overview/","page":"ITensor Ecosystem Overview","title":"ITensor Ecosystem Overview","text":"","category":"page"}]
}
