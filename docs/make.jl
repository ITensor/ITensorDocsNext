using ITensorDocsNext: ITensorDocsNext
using Documenter: Documenter, DocMeta, deploydocs, makedocs

DocMeta.setdocmeta!(
  ITensorDocsNext, :DocTestSetup, :(using ITensorDocsNext); recursive=true
)

include("make_index.jl")

makedocs(;
  modules=[ITensorDocsNext],
  authors="ITensor developers <support@itensor.org> and contributors",
  sitename="ITensorDocsNext.jl",
  format=Documenter.HTML(;
    canonical="https://ITensor.github.io/ITensorDocsNext.jl",
    edit_link="main",
    assets=String[],
  ),
  pages=["Home" => "index.md", "Reference" => "reference.md"],
)

deploydocs(;
  repo="github.com/ITensor/ITensorDocsNext.jl", devbranch="main", push_preview=true
)
