package com.cursodedesenvolvimentodesoftware.somadoisnumeros.views

import android.annotation.SuppressLint
import android.widget.Toast
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.cursodedesenvolvimentodesoftware.somadoisnumeros.components.CustomButton
import com.cursodedesenvolvimentodesoftware.somadoisnumeros.ui.theme.Green
import com.cursodedesenvolvimentodesoftware.somadoisnumeros.ui.theme.White

@OptIn(ExperimentalMaterial3Api::class)
@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@Composable()
fun SomaDoisNumeros(
    modifier: Modifier,
) {
    var number1 by remember { mutableStateOf("") }
    var number2 by remember { mutableStateOf("") }
    var sum by remember { mutableStateOf("") }
    var number1Validation by remember { mutableStateOf(false) }

    val context = LocalContext.current

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text(
                        text = "Soma de dois número",
                        fontSize = 18.sp
                    )
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = Green,
                    titleContentColor = White
                ),
            )
        },
        content = { innerPadding ->
            Column(
                modifier = modifier
                    .padding(innerPadding)
                    .padding(horizontal = 10.dp),
//                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                OutlinedTextField(
                    value = number1,
                    onValueChange = {
                        number1 = it
                        if (number1Validation) number1Validation = false
                    },
                    label = { Text("Digite um número") },
                    modifier = Modifier
                        .padding(
                            bottom = 20.dp
                        )
                        .fillMaxWidth(),
                    keyboardOptions = KeyboardOptions(
                        keyboardType = KeyboardType.Decimal
                    ),
                    supportingText = {
                        number1 = number1.trim()

                        if (number1.isEmpty()) {
                            Text(
                                text = "Campo obrigatório",
                                color = MaterialTheme.colorScheme.error
                            )
                        }
                    }
                )

                OutlinedTextField(
                    value = number2,
                    onValueChange = {
                        number2 = it
                    },
                    label = { Text("Digite um número") },
                    modifier = Modifier
                        .padding(
                            bottom = 20.dp
                        )
                        .fillMaxWidth(),
                )

                Row(
                    horizontalArrangement = Arrangement.End,
                    modifier = Modifier.fillMaxWidth()
                ) {
                    CustomButton(
                        onClick = {
                            number1 = ""
                            number2 = ""
                            sum = ""
                        },
                        label = "Limpar",
                        containerColor = MaterialTheme.colorScheme.secondary,
                        contentColor = MaterialTheme.colorScheme.onSecondary
                    )

                    Spacer(
                        modifier = Modifier.padding(10.dp)
                    )

                    CustomButton(
                        onClick = {
                            sum = (number1.toInt() + number2.toInt()).toString()
                            Toast.makeText(
                                context,
                                "Resultado: $sum",
                                Toast.LENGTH_LONG
                            )
                                .show()
                        },
                        label = "Subtrair",
                        containerColor = MaterialTheme.colorScheme.primary,
                        contentColor = MaterialTheme.colorScheme.onPrimary
                    )
                }

                Text(
                    sum,
                    fontSize = 100.sp,
                    textAlign = TextAlign.Center,
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(10.dp)
                )
            }
        }
    )
}