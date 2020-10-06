# stream = File.stream!("./arquivo.txt") 
# |> Stream.map(&String.trim/1)
# |> Stream.with_index
# |> Stream.map(fn ({line, index}) -> IO.puts "#{index + 1} #{line}" end)
# |> Stream.run
defmodule M do
  def main do
    streamer()
  end

  def func(str) do
    map = %{}
    array = String.split(str, "", trim: true)
    Enum.each(array, fn(l) -> insert_letter(l, map) end)
  end

  def insert_letter(l, map) do
    if Map.has_key?(map, l) do
      map = %{map | l => map[l] + 1}
      IO.puts 'if'
      IO.inspect map
    else
      IO.puts 'else'
      IO.inspect map
      map = Map.put(map, :l, 1)
      IO.inspect map
    end
  end

  def streamer() do
    list = File.stream!("./arquivo.txt") 
    |> Enum.to_list()

    map_two = list
    |> Enum.reduce(%{:two => 0}, fn str, acc ->
      Map.put(acc, :two, acc[:two] + count(str, 2))
    end)

    map_tree = list
    |> Enum.reduce(%{:tree => 0}, fn str, acc ->
      Map.put(acc, :tree, acc[:tree] + count(str, 3))
    end)

    map_two[:two] * map_tree[:tree]

  end

  def count(str, num) do
    boo = str
    |> String.graphemes()
    |> Enum.reduce(%{}, fn c, acc ->
      Map.put(acc, c, (acc[c] || 0) +1)
    end)
    |> Enum.any?(fn {_, c} -> c == num end)

    if boo, do: 1, else: 0
  end
end
