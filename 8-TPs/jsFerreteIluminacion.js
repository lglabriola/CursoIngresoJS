/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidad;
	var precioDescuento;
	var marca;
	var precioBruto;
	var precioFinal;
	var ingresos;

	cantidad = document.getElementById('Cantidad').value;
	marca = document.getElementById('Marca').value;
	precioBruto = cantidad * 35;
/*  //con IF funciona bien
	if(cantidad > 5)//A.Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
	{	
		precioFinal = precioBruto * 0.5;
	}
	if(cantidad == 5)//B.Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%. 
	{
		if(marca == 'ArgentinaLuz')
		{
			precioFinal = precioBruto * 0.6;
		}
		else
		{
			precioFinal = precioBruto * 0.7;
		}
	}	
	if(cantidad == 4)//C.Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
	{
		if(marca == 'ArgentinaLuz' || marca == '“FelipeLamparas”')
		{
			precioFinal = precioBruto * 0.75;
		}
		else
		{
			precioFinal = precioBruto * 0.8;
		}
	}
	if(cantidad == 3)//D.Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
	{
		if(marca == 'ArgentinaLuz')
		{
			precioFinal = precioBruto * 0.85;
		}
		else
		{
			if(marca == 'FelipeLamparas')
			{
				precioFinal = precioBruto * 0.9;
			}
			else
			{
				precioFinal = precioBruto * 0.95;
			}
		}
	}
	*/                           //con SWITCH Verificar por que no me dan los resultados
	switch(cantidad)
		{
			default: //A.Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
				precioFinal = precioBruto * 0.5;
			break;
			
			case '5'://B.Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%. 
			{
				if(marca == 'ArgentinaLuz')
				{
					precioFinal = precioBruto * 0.6;
				}
				else
				{
					precioFinal = precioBruto * 0.7;
				}
			}
			break;	
			case '5'://C.Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
			{
				if(marca == 'ArgentinaLuz' || marca == '“FelipeLamparas”')
				{
					precioFinal = precioBruto * 0.75;
				}
				else
				{
					precioFinal = precioBruto * 0.8;
				}
			}
			break;
			case '5'://D.Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
			{
				if(marca == 'ArgentinaLuz')
				{
					precioFinal = precioBruto * 0.85;
				}
				else
				{
					if(marca == 'FelipeLamparas')
					{
						precioFinal = precioBruto * 0.9;
					}
					else
					{
						precioFinal = precioBruto * 0.95;
					}
				}
			}


		}

		document.getElementById('precioDescuento').value = precioFinal;

}
