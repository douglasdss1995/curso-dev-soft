package com.cursodedesenvolvimentodesoftware.imc.views

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun IMCCalculatorApp() {
    var pesoInput by remember { mutableStateOf("") }
    var alturaInput by remember { mutableStateOf("") }
    var imcResult by remember { mutableStateOf<Double?>(null) }
    var resultadoTexto by remember { mutableStateOf("") }
    val focusManager = LocalFocusManager.current

    fun calcularIMC(
        peso: Double,
        alturaCm: Double
    ): Double {
        val alturaM = alturaCm / 100
        return peso / (alturaM * alturaM)
    }

    fun classificarIMC(imc: Double): String {
        return when {
            imc < 18.5 -> "Abaixo do peso"
            imc < 24.9 -> "Peso normal"
            imc < 29.9 -> "Sobrepeso"
            else -> "Obesidade"
        }
    }

    fun corPorIMC(imc: Double): Color {
        return when {
            imc < 18.5 -> Color(0xFF2196F3) // azul
            imc < 24.9 -> Color(0xFF4CAF50) // verde
            imc < 29.9 -> Color(0xFFFFA000) // laranja
            else -> Color(0xFFD32F2F) // vermelho
        }
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Top
    ) {
        Text(
            text = "Calculadora de IMC",
            fontSize = 28.sp,
            fontWeight = FontWeight.Bold,
            modifier = Modifier.padding(bottom = 32.dp),
            color = MaterialTheme.colorScheme.primary
        )
        OutlinedTextField(
            value = pesoInput,
            onValueChange = { pesoInput = it.filter { char -> char.isDigit() || char == '.' } },
            label = { Text("Peso (kg)") },
            singleLine = true,
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
            modifier = Modifier.fillMaxWidth()
        )
        Spacer(modifier = Modifier.height(16.dp))
        OutlinedTextField(
            value = alturaInput,
            onValueChange = { alturaInput = it.filter { char -> char.isDigit() || char == '.' } },
            label = { Text("Altura (cm)") },
            singleLine = true,
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
            modifier = Modifier.fillMaxWidth()
        )
        Spacer(modifier = Modifier.height(32.dp))
        Button(
            onClick = {
                focusManager.clearFocus()
                val peso = pesoInput.toDoubleOrNull()
                val altura = alturaInput.toDoubleOrNull()
                if (peso != null && altura != null && peso > 0 && altura > 0) {
                    val imc = calcularIMC(
                        peso,
                        altura
                    )
                    imcResult = imc
                    resultadoTexto = classificarIMC(imc)
                } else {
                    imcResult = null
                    resultadoTexto = "Por favor, insira valores válidos."
                }
            },
            modifier = Modifier
                .fillMaxWidth()
                .height(50.dp),
        ) {
            Text(
                text = "Calcular IMC",
                fontSize = 18.sp
            )
        }
        Spacer(modifier = Modifier.height(32.dp))
        if (imcResult != null) {
            Text(
                text = "Seu IMC é: ${"%.2f".format(imcResult)}",
                fontSize = 24.sp,
                fontWeight = FontWeight.SemiBold,
                color = corPorIMC(imcResult!!)
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = resultadoTexto,
                fontSize = 20.sp,
                color = corPorIMC(imcResult!!)
            )
        } else if (resultadoTexto.isNotEmpty()) {
            Text(
                text = resultadoTexto,
                fontSize = 18.sp,
                fontWeight = FontWeight.Medium,
                color = Color.Red
            )
        }
    }
}