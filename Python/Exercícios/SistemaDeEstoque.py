def listaProduto(arr): # cria uma lista do array
        for i in range (len(arr)):
                    print(f'{arr[i]}')


def produto(arr):
    
        consulta = False
        while consulta == False:

            print("Escolha uma opção:")
            print("1 - Ver produtos em estoque ")
            print("2 - Alterar produto")
            print("3 - Adicionar produto")
            print("4 - Fechar sistema")
            print("<----------------------------------->") 
            try:
                op = int(input("Digite um número: "))
                if op == 1:
                    print('PRODUTOS EM ESTOQUE')
                    print('----------------------------')
                    listaProduto(arr)
                    print('----------------------------') 

                elif op == 2:
                    print('ALTERAR PRODUTO')
                    print('----------------------------')
                    atual = input("Digite o nome do produto antigo: ")
                    novo = input("Digite o nome do produto novo: ")

                    if atual in arr:
                        index = arr.index(atual) 
                        arr[index] = novo
                        print('PRODUTOS EM ESTOQUE')
                        print('----------------------------')
                        listaProduto(arr)
                        print('----------------------------')
                    else:
                        print("Produto não encontrado!")

                elif op == 3:
                    nvproduto = input("Digite o produto novo:")
                    arr.append(nvproduto)  
                    listaProduto(arr)
                    print('----------------------------')

                elif op == 4:
                    print('Fechando o sistema.')
                    break

                else:
                    print('Ocorreu um erro, tente mais uma vez!')
            except ValueError:
                print('----------------------------')
                print("Valor inválido!")
                print('----------------------------')

            except Exception as e:
                print('----------------------------')
                print(f"Ocorreu uma exceção não tratada: {e}")
                print('----------------------------')

listaProdutos = ['máscaras faciais', 'batons', 'esmaltes', 'perfumes', 'loções', 'xampus', 'sabonetes', 'delineadores']
produto(listaProdutos)