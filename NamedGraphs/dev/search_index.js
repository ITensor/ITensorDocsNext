var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [NamedGraphs, NamedGraphs.GraphsExtensions, NamedGraphs.NamedGraphGenerators, NamedGraphs.Keys]","category":"page"},{"location":"reference/#NamedGraphs.DefaultNamedCapacity","page":"Reference","title":"NamedGraphs.DefaultNamedCapacity","text":"DefaultNamedCapacity{T}\n\nStructure that returns 1 if a forward edge exists in flow_graph, and 0 otherwise.\n\n\n\n\n\n","category":"type"},{"location":"reference/#NamedGraphs.NamedDijkstraState","page":"Reference","title":"NamedGraphs.NamedDijkstraState","text":"struct NamedDijkstraState{V,T}\n\nAn AbstractPathState designed for Dijkstra shortest-paths calculations.\n\n\n\n\n\n","category":"type"},{"location":"reference/#NamedGraphs.edgeinduced_subgraphs_no_leaves-Tuple{NamedGraphs.AbstractNamedGraph, Int64}","page":"Reference","title":"NamedGraphs.edgeinduced_subgraphs_no_leaves","text":"edgeinduced_subgraphs_no_leaves(g::AbstractNamedGraph, max_number_of_edges::Int64)\n\nEnumerate all unique, connected edgesubgraphs without any leaf vertices (degree 1) and with Nedges <= maxnumberof_edges\n\n\n\n\n\n","category":"method"},{"location":"reference/#NamedGraphs.GraphsExtensions.CURRENT_PARTITIONING_BACKEND","page":"Reference","title":"NamedGraphs.GraphsExtensions.CURRENT_PARTITIONING_BACKEND","text":"Current default graph partitioning backend\n\n\n\n\n\n","category":"constant"},{"location":"reference/#NamedGraphs.GraphsExtensions.Backend","page":"Reference","title":"NamedGraphs.GraphsExtensions.Backend","text":"Graph partitioning backend\n\n\n\n\n\n","category":"type"},{"location":"reference/#NamedGraphs.GraphsExtensions.add_edges!-Tuple{Graphs.AbstractGraph, Any}","page":"Reference","title":"NamedGraphs.GraphsExtensions.add_edges!","text":"Add a list of edges to a graph g\n\n\n\n\n\n","category":"method"},{"location":"reference/#NamedGraphs.GraphsExtensions.current_partitioning_backend-Tuple{}","page":"Reference","title":"NamedGraphs.GraphsExtensions.current_partitioning_backend","text":"Get the graph partitioning backend\n\n\n\n\n\n","category":"method"},{"location":"reference/#NamedGraphs.GraphsExtensions.distance_to_leaves-Tuple{Graphs.AbstractGraph, Any}","page":"Reference","title":"NamedGraphs.GraphsExtensions.distance_to_leaves","text":"Get distance of a vertex from a leaf\n\n\n\n\n\n","category":"method"},{"location":"reference/#NamedGraphs.GraphsExtensions.has_leaf_neighbor-Tuple{Graphs.AbstractGraph, Any}","page":"Reference","title":"NamedGraphs.GraphsExtensions.has_leaf_neighbor","text":"Determine if a node has any neighbors which are leaves\n\n\n\n\n\n","category":"method"},{"location":"reference/#NamedGraphs.GraphsExtensions.incident_edges-Tuple{Graphs.AbstractGraph, Any}","page":"Reference","title":"NamedGraphs.GraphsExtensions.incident_edges","text":"incident_edges(graph::AbstractGraph, vertex; dir=:out)\n\nEdges incident to the vertex vertex.\n\ndir ∈ (:in, :out, :both), defaults to :out.\n\nFor undirected graphs, returns all incident edges.\n\nLike: https://juliagraphs.org/Graphs.jl/v1.7/algorithms/linalg/#Graphs.LinAlg.adjacency_matrix\n\n\n\n\n\n","category":"method"},{"location":"reference/#NamedGraphs.GraphsExtensions.is_cycle_graph-Union{Tuple{var\"##239\"}, Tuple{Type{SimpleTraits.Not{Graphs.IsDirected{var\"##239\"}}}, var\"##239\"}} where var\"##239\"","page":"Reference","title":"NamedGraphs.GraphsExtensions.is_cycle_graph","text":"https://juliagraphs.org/Graphs.jl/dev/corefunctions/simplegraphsgenerators/#Graphs.SimpleGraphs.cyclegraph-Tuple%7BT%7D%20where%20T%3C:Integer https://en.wikipedia.org/wiki/Cyclegraph\n\n\n\n\n\n","category":"method"},{"location":"reference/#NamedGraphs.GraphsExtensions.is_leaf_edge-Union{Tuple{var\"##244\"}, Tuple{Type{SimpleTraits.Not{Graphs.IsDirected{var\"##244\"}}}, var\"##244\", Graphs.AbstractEdge}} where var\"##244\"","page":"Reference","title":"NamedGraphs.GraphsExtensions.is_leaf_edge","text":"Determine if an edge involves a leaf (at src or dst)\n\n\n\n\n\n","category":"method"},{"location":"reference/#NamedGraphs.GraphsExtensions.is_path_graph-Union{Tuple{var\"##238\"}, Tuple{Type{SimpleTraits.Not{Graphs.IsDirected{var\"##238\"}}}, var\"##238\"}} where var\"##238\"","page":"Reference","title":"NamedGraphs.GraphsExtensions.is_path_graph","text":"Check if an undirected graph is a path/linear graph:\n\nhttps://en.wikipedia.org/wiki/Path_graph\n\nbut not a path/linear forest:\n\nhttps://en.wikipedia.org/wiki/Linear_forest\n\n\n\n\n\n","category":"method"},{"location":"reference/#NamedGraphs.GraphsExtensions.non_leaf_edges-Tuple{Graphs.AbstractGraph}","page":"Reference","title":"NamedGraphs.GraphsExtensions.non_leaf_edges","text":"Get all edges which do not involve a leaf\n\nhttps://en.wikipedia.org/wiki/Tree(graphtheory)#Definitions\n\n\n\n\n\n","category":"method"},{"location":"reference/#NamedGraphs.GraphsExtensions.random_bfs_tree-Tuple{Graphs.AbstractGraph, Any}","page":"Reference","title":"NamedGraphs.GraphsExtensions.random_bfs_tree","text":"Do a BFS search to construct a tree, but do it with randomness to avoid generating the same tree. Based on Int. J. Comput. Their Appl. 15 pp 177-186 (2008). Edges will point away from source vertex s.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NamedGraphs.GraphsExtensions.rem_edges!-Tuple{Graphs.AbstractGraph, Any}","page":"Reference","title":"NamedGraphs.GraphsExtensions.rem_edges!","text":"Remove a list of edges from a graph g\n\n\n\n\n\n","category":"method"},{"location":"reference/#NamedGraphs.GraphsExtensions.rem_vertices!-Tuple{Graphs.AbstractGraph, Any}","page":"Reference","title":"NamedGraphs.GraphsExtensions.rem_vertices!","text":"Remove a list of vertices from a graph g\n\n\n\n\n\n","category":"method"},{"location":"reference/#NamedGraphs.GraphsExtensions.root_vertex-Union{Tuple{var\"##249\"}, Tuple{Type{Graphs.IsDirected{var\"##249\"}}, var\"##249\"}} where var\"##249\"","page":"Reference","title":"NamedGraphs.GraphsExtensions.root_vertex","text":"Return the root vertex of a rooted directed graph.\n\nThis will return the first root vertex that is found, so won't error if there is more than one.\n\n\n\n\n\n","category":"method"},{"location":"reference/#NamedGraphs.GraphsExtensions.set_partitioning_backend!-Tuple{Union{Missing, String, NamedGraphs.GraphsExtensions.Backend}}","page":"Reference","title":"NamedGraphs.GraphsExtensions.set_partitioning_backend!","text":"Set the graph partitioning backend\n\n\n\n\n\n","category":"method"},{"location":"reference/#NamedGraphs.NamedGraphGenerators.named_hexagonal_lattice_graph-Tuple{Integer, Integer}","page":"Reference","title":"NamedGraphs.NamedGraphGenerators.named_hexagonal_lattice_graph","text":"Generate a graph which corresponds to a hexagonal tiling of the plane. There are m rows and n columns of hexagons. Based off of the generator in Networkx hexagonallatticegraph()\n\n\n\n\n\n","category":"method"},{"location":"reference/#NamedGraphs.NamedGraphGenerators.named_triangular_lattice_graph-Tuple{Integer, Integer}","page":"Reference","title":"NamedGraphs.NamedGraphGenerators.named_triangular_lattice_graph","text":"Generate a graph which corresponds to a equilateral triangle tiling of the plane. There are m rows and n columns of triangles. Based off of the generator in Networkx triangularlatticegraph()\n\n\n\n\n\n","category":"method"},{"location":"reference/#NamedGraphs.Keys.Key","page":"Reference","title":"NamedGraphs.Keys.Key","text":"Key{K}\n\nA key (index) type, used for unambiguously identifying an object as a key or index of an indexible object AbstractArray, AbstractDict, etc.\n\nUseful for nested structures of indices, for example:\n\n[Key([1, 2]), [Key([3, 4]), Key([5, 6])]]\n\nwhich could represent partitioning a set of vertices\n\n[Key([1, 2]), Key([3, 4]), Key([5, 6])]\n\n\n\n\n\n","category":"type"},{"location":"","page":"Home","title":"Home","text":"EditURL = \"../../examples/README.jl\"","category":"page"},{"location":"#NamedGraphs.jl","page":"Home","title":"NamedGraphs.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Stable) (Image: Dev) (Image: Build Status) (Image: Coverage) (Image: Code Style: Blue) (Image: Aqua)","category":"page"},{"location":"#Support","page":"Home","title":"Support","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"<img class=\"display-light-only\" src=\"assets/CCQ.png\" width=\"20%\" alt=\"Flatiron Center for Computational Quantum Physics logo.\"/>\n<img class=\"display-dark-only\" src=\"assets/CCQ-dark.png\" width=\"20%\" alt=\"Flatiron Center for Computational Quantum Physics logo.\"/>","category":"page"},{"location":"","page":"Home","title":"Home","text":"NamedGraphs.jl is supported by the Flatiron Institute, a division of the Simons Foundation.","category":"page"},{"location":"#Installation-instructions","page":"Home","title":"Installation instructions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package resides in the ITensor/ITensorRegistry local registry. In order to install, simply add that registry through your package manager. This step is only required once.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using Pkg: Pkg\n\njulia> Pkg.Registry.add(url=\"https://github.com/ITensor/ITensorRegistry\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"or:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> Pkg.Registry.add(url=\"git@github.com:ITensor/ITensorRegistry.git\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"if you want to use SSH credentials, which can make it so you don't have to enter your Github ursername and password when registering packages.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Then, the package can be added as usual through the package manager:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> Pkg.add(\"NamedGraphs\")","category":"page"},{"location":"#Examples","page":"Home","title":"Examples","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using NamedGraphs: NamedGraphs","category":"page"},{"location":"","page":"Home","title":"Home","text":"Examples go here.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"This page was generated using Literate.jl.","category":"page"}]
}
