GS.dataCache['C9AA965A6658C041D459A346410A3365EF8E'] = {
    "uid": "C9AA965A6658C041D459A346410A3365EF8E",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Bedtime with Tobias",
        "type": "vn.scene",
        "parentId": "3C25D2203330434CC04AD9F699443C903364",
        "chapterUid": "33CA8B7A0CD3B540DA7A46943C31E3392A9E",
        "order": 1,
        "livePreviewDisabled": false,
        "listVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "commands": [
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "2F2EF76A29CD244C777816787551DE0A054C",
                    "parameters": {
                        "values": []
                    }
                },
                "uid": "FFF1778F9474B44C8308972263B23ED89ACF",
                "indent": 0
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "B70EF7958B4D3549C968F5C3DE576C542E5D",
                    "parameters": {
                        "values": []
                    }
                },
                "uid": "D6CF34DB2394134DA72A6AE416A77A016941",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "6D929B358FE2F64DE76B703101EC5E87B176",
                        "defaultText": "You like music? It usually helps me feel better when things get a bit, uh, chaotic. "
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "91F46F4D262BA8450439648522A46F4CCCF6",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "yesmusic",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "3DF431241520F543BF2BEA90463FDB2A930D",
                        "defaultText": "\"I do.\""
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "uid": "9888005B792DA14CC019B8361674A1C9F403",
                "indent": 0
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "nomusic",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "118679FA4C0CB745993B64E06EBA3420F8FD",
                        "defaultText": "\"Not really.\""
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "uid": "21D85681674B684747690F6199D14501ADE1",
                "indent": 0
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "uid": "CB31607D67D9864BC67B152769265CF5B808",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "yesmusic"
                },
                "uid": "0178DF6725E3554CD689A3A0F27E4BB8E27F",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "F19A0A5505D6744ADF594BF62A413A21253E",
                        "defaultText": "It would be weird if you didn't. I mean, who doesn't like music at all? There's so much variety out there, yknow?"
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "E8F2E7827098B24FAD29E6D391BCF6010124",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "tobiasmusic"
                },
                "uid": "3A4F13A678DF47449F29CA9222CE7ECAF96F",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "nomusic"
                },
                "uid": "56F3D2A03317B446D36AFC51151B04000248",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "7E601BD03165D444691A0D52AECCDAE18958",
                        "defaultText": "Seriously? There's no music you like? "
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "47908DAC0280D749C21B0464947D8ECCCF76",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "tobiasmusic"
                },
                "uid": "37B8069E1C76C545EF894760F124DA543580",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "tobiasmusic"
                },
                "uid": "E34D514958FB6944656856125FE0198D45F5",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "63D415742B84484BDD6A05E1729C13136A4A",
                        "defaultText": "C'mere, turns out I still have my mp3 player. I want you to listen to some of this. "
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "F66BB0CB8929C446CD78FC426B4D0BEDBF0A",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "7D761DE683C6104CF179DF82453DD575BE60",
                        "defaultText": "He sits down on the bed, reaching under it to a cooler box and retrieving two bottles of a fizzing, soft pink drink. He puts one in your hands, then slides over to make room for you on the bed. "
                    },
                    "position": 0,
                    "characterId": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "BDDE7803927E71480E9BB9636312ACB72E37",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "83D812626561294D007AE4B41D0231E2391D",
                        "defaultText": "Here, let me put this on...Close your eyes though, you have to appreciate the music."
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "2C23A67E317DF349CD6B7A108B526D808229",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.BlendBackground",
                "params": {
                    "number": 0,
                    "duration": 60,
                    "waitForCompletion": 0,
                    "opacity": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "layer": 0
                },
                "uid": "0C6D14951397A248081BFE37877789F31DAA",
                "indent": 0
            },
            {
                "id": "vn.BlendCharacter",
                "params": {
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "duration": 60,
                    "waitForCompletion": 1,
                    "opacity": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "684908CB206A474A2E4A3BA3A25A8E2C1C79",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "B1DF283337BEE0453F2926E46FEBF9D753AB",
                        "defaultText": "He carefully places his headphones on your head."
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "2D6744983040984D7079FA60F9E8E4DD6370",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "85C58AA967F9D141617A8E61ABD2F59B56EC",
                        "defaultText": "Is that uncomfortable? No? Okay, I'm gonna play it now, {N:0001}."
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "6808816D876B0142D978F5E5A5B989539EAA",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "music": {
                        "name": "gamer_time",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "fadeInDuration": 60,
                    "playTime": {
                        "min": 10,
                        "max": 30
                    },
                    "playRange": {
                        "start": 10,
                        "end": 20
                    },
                    "playType": 0,
                    "fieldFlags": {
                        "music.volume": 1,
                        "music.playbackRate": 1,
                        "fadeInDuration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "27D07CA609C2B447083A73C4C96E75F1AF90",
                "indent": 0
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 300
                },
                "uid": "06C3F02F2A4BD64AFD3A06D40C2032586E05",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "5439C9DF9BA2B747CF7B86C8CB69C0911CBC",
                        "defaultText": "Good, right?"
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "A28361040D47F24E501B03711330CE0B00D8",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "F06D2BDC7C65F34DE68A2B31CABD42542534",
                        "defaultText": "You nod, and as the song ends, he takes the headphones off."
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "76128AE08B178842D56BC9279834CB0825EB",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.PauseMusic",
                "params": {
                    "layer": 0,
                    "fadeOutDuration": 60,
                    "fieldFlags": {
                        "fadeOutDuration": 0
                    }
                },
                "uid": "556F4A9E4903F348C6995F290EED61E2CAD3",
                "indent": 0
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "tobias room",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "layer": 0,
                    "duration": 60,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "E0E29E4422F7D84C9A490D34E4DB3AE352AB",
                "indent": 0
            },
            {
                "id": "vn.BlendCharacter",
                "params": {
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "duration": 60,
                    "waitForCompletion": 0,
                    "opacity": 255,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "04F970493364024914585812C08B7BC4AEB3",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "16EB352C7025924A5B7A37761BC1DD183AF4",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "247E79E121913845A09BA3676CDA60E04C0F",
                        "defaultText": "Sorry. Just, ah, I can't hear the music if you're listening to it. "
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "66D656E47A560149432A6FD053470EDFD88D",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "569486524904E14F564B9C62B31E5145175F",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "5F9E164F80E93346A54BB398F059881A6517",
                        "defaultText": "Uh, if you want to spend the night, where...? I have an extra mattress for the floor, or..."
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "072051E407E624468D8B58366F124F2DD4D7",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "floorsleeptobi",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "82974A93653C0044D438D499170D4F6D4BD1",
                        "defaultText": "(Sleep on the extra mattress.)"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "uid": "5139BF5A9C6CB94E6F283F991FAFB85D23A5",
                "indent": 0
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "sleeptogethertobi",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "890C7E075709A64E2E3A90A08B43113FB494",
                        "defaultText": "(Ask to sleep in his.)"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "uid": "AA5E4992999F884E555A7D37E69E4A18E122",
                "indent": 0
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "uid": "D4BAFFD872396140E959F4B1A55FAF3A2DA2",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "sleeptogethertobi"
                },
                "uid": "3A99CCDA504BE145AF9B31E52B6226CD55E2",
                "indent": 0
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "tobiasromance",
                        "index": 3,
                        "scope": 1,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1
                    },
                    "operation": 1,
                    "source": 0,
                    "sourceValue": 0,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1
                    },
                    "sourceReferenceDomain": "com.degica.vnm.default",
                    "sourceReference": {
                        "index": 0,
                        "scope": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "4F6C2F7D6528114D134B5A049B61177FBBC8",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "A0A51BC61579E64B825B293043021EF4976E",
                        "defaultText": "Oh, are you sure? Might be a bit of a tight squeeze but I guess I don't have to find where I left the spare blankets....Let me just..."
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "A473E8BD81EF3547BF58DAB45397D5624A42",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.BlendBackground",
                "params": {
                    "number": 0,
                    "duration": 600,
                    "waitForCompletion": 0,
                    "opacity": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "C13625412018E74F6E1BA1D38807526F3D07",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "C2E4322B9F99A74E8E1B370320842517204A",
                        "defaultText": "He slides over, leaving just enough space for you to clamber in beside him. Some rustling as the two of you settle in, but you soon find a comfortable position in the small space. Just you, because this man is twisted all over the place trying to be respectful and not touch you in the slightest. "
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "585469ED15A3B6438A883A15F0DD70CDF39F",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "C906FEB67506E94ECC8ADB42EFAB4FB6FB87",
                        "defaultText": "It's okay to touch me, Tobias."
                    },
                    "position": 0,
                    "characterId": "EC1C8AE072F8A641AA5818181D511081411A",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "D2C8FD859FB6914A15396FA3EB554F1BA124",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "16EB352C7025924A5B7A37761BC1DD183AF4",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "825993C322008745936A2893F0D9FF62B8C8",
                        "defaultText": "...Ah. If you, if you're sure, {N:0001}. "
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "BB00294C18FC234DC40B8E43B70040289F18",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "B3C28FBB7CF8924EA43834E4C9D1B14EE791",
                        "defaultText": "He relaxes, letting his arm drape over you. Eventually, his chin rests gently against the top of your head, and your cheek rests against his chest."
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "E6BBC0AD4EE3604389784EC3721865B5311A",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "75C9782E518C154D921BEEF32EC6FB35E231",
                        "defaultText": "...You can call me Tobi, if you want. "
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "273ED1AF83A7314963483788F013AA842640",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "70EB75127B91F149704AC00757316388C2F3",
                        "defaultText": "...Goodnight, Tobi."
                    },
                    "position": 0,
                    "characterId": "EC1C8AE072F8A641AA5818181D511081411A",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "D54E1F3165C1674D7138E2D0283935DAB028",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "A42B41B857A1534A777B1CA8883703B469BE",
                        "defaultText": "Goodnight."
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "FC20DA02374361470079976470B1908B3E87",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.BlendCharacter",
                "params": {
                    "characterId": null,
                    "duration": 300,
                    "waitForCompletion": 0,
                    "opacity": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "445B84641CDD0045718B9816AC171026E52D",
                "indent": 0
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 150
                },
                "uid": "D26669B14BA0324AFA8A8C02C323BF70B687",
                "indent": 0
            },
            {
                "id": "vn.UnlockCG",
                "params": {
                    "cgId": "EBD7F0312346874567894CD54B4DE390905B"
                },
                "uid": "8FAD15EE285B06478479258240E39699CD91",
                "indent": 0
            },
            {
                "id": "vn.UnlockCG",
                "params": {
                    "cgId": "899676CA9A80504A435A3F74C9C3436771D8"
                },
                "uid": "722C6A5930E1D34F4F7B3EA2F0753100CC04",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "AA2BED9F60AF124D9F6A85C752F20ABC6451",
                        "name": "Morning with Tobias"
                    },
                    "savePrevious": 1,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "EA3CFDC824764249ED3A23657B916654E596",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "floorsleeptobi"
                },
                "uid": "B88ED1D20B362440941886B16F6B92FB9C2A",
                "indent": 0
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "tobiashomie",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1
                    },
                    "operation": 1,
                    "source": 0,
                    "sourceValue": 5,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1
                    },
                    "sourceReferenceDomain": "com.degica.vnm.default",
                    "sourceReference": {
                        "index": 0,
                        "scope": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "903F794461A2194B864B7DB2BCDFB535A3FE",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "E2527D6710C46040CF188A0808C1835972AF",
                        "defaultText": "Alrighty. Let me just go find the, the uh, what is it? Oh yeah, blankets. "
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "ED2333E62DA677405239F7D5D806B2A8F43D",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "duration": 60,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "81323F1384E104447E5BA010DCA8B118FF7E",
                "indent": 0
            },
            {
                "id": "gs.PlaySound",
                "params": {
                    "sound": {
                        "name": "rummaging",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "musicEffect": 1,
                    "fieldFlags": {
                        "sound.volume": 1,
                        "sound.playbackRate": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "C6B6D1C26E564548072BC8724769B9BE503A",
                "indent": 0
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 300
                },
                "uid": "CEAC87E96A1E484E7A78E976D80DE81BBB81",
                "indent": 0
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 5,
                    "expressionId": null,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "zOrder": 0,
                    "origin": 0,
                    "blendMode": 0,
                    "positionType": 0,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 60,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "83F9A4833036D24E55289679FE943B6353E6",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "61FFA25603B375469018E0681CF89E16E01C",
                        "defaultText": "Found them. I'll set it out for you, gimme a moment. "
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "0985DE8885B339481B08C3A463EFC38959B3",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "4EB3052C4D634240FF7919361CECD0BA5473",
                        "defaultText": "He yanks a large, comfortable looking mattress from under the bed, neatly placing a pillow at the head and draping a large fleece blanket over it. He then climbs onto his bed, and gestures out at his work."
                    },
                    "position": 0,
                    "characterId": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "57376E3C142D65412B2A13C0869E30E0AB60",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "2B7D0EC78EA3A84A8239465592CA7319A006",
                        "defaultText": "Voila, it's a bed! "
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "EC8DA2313788D64ACE4B38221A08D0204B9F",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "5D8EDF792CD5644F2208B745EAFC4DC31738",
                        "defaultText": "You lie down on your bed, and all you can see of Tobias is his knee jutting off the edge of his bed."
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "A50B19F27DA8334EE3595E754879CE8702B6",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "duration": 60,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "640291F5148AB44B9099E8B89CAC37846D84",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "FEA842B2227A9446F66826C13522BC1EBD8B",
                        "defaultText": "Thank you, Tobias."
                    },
                    "position": 0,
                    "characterId": "EC1C8AE072F8A641AA5818181D511081411A",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "606EAB4E659F9544B038ED68EB07C5ABC501",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "DEBB6EED8ADA484EFE2AE7E11DDA58FD8670",
                        "defaultText": "You can call me Tobi, if you want."
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "7E3970D205AC494D0E88DCC73E76BBA483FE",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "F4B92565342B4941B77837A1D595DD225A73",
                        "defaultText": "You hear him cracking open the lid of his drink bottle, the fizzing sound of the carbonated drink. You decide to do the same. Taking a sip, it tastes like fresh raspberries and a hint of citrus. "
                    },
                    "position": 0,
                    "characterId": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "4CBAC6EF3F4C914B7D38A847DB67B46400C2",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "9804D1936693A04D86091B82EF9554D557B6",
                        "defaultText": "Okay. Thank you for the drink, Tobi."
                    },
                    "position": 0,
                    "characterId": "EC1C8AE072F8A641AA5818181D511081411A",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "07BD98A379450548A54ABE973E6CF5D3C5CC",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "A458AA5B7C484241CF8AC8C21E5DEC52FE01",
                        "defaultText": "Ehh, it's nothing, don't worry about it."
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "5D2EDD9B3827684CD94844759ADF77D34BC2",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "4AC106D0610A594C01086173097249C37B15",
                        "defaultText": "......"
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "B8A742EE13A28640FC4931117223F2216E28",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "487EB43C4AAD2543BE3A22C906D4CE1D5537",
                        "defaultText": "Goodnight, {N:0001}."
                    },
                    "position": 0,
                    "characterId": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "AB3CBD363D71974B788B5211652040E70A4A",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "0D2A4A886A66F647EA690780E42865F170F1",
                        "defaultText": "Goodnight. "
                    },
                    "position": 0,
                    "characterId": "EC1C8AE072F8A641AA5818181D511081411A",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "AA551ED563F4F742816BE6672C8CBA068AA6",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 0,
                    "blendMode": 0,
                    "zOrder": 0,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "origin": 1,
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "tobiascg1night",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    }
                },
                "uid": "D63039260726E644A2191CF7D6364F9EB8AB",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "C5514EA18BDD934CAA7BAE796FAB61F04C2C",
                        "defaultText": "As the night grows darker, and the sound of waves lapping against the hull of the ship rocks the two of you gently, you fall asleep to the sound of music leaking out of Tobi's headphones..."
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "BAEFB8A23BDD8644D51BBCD8D3EDBD3D5F7B",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.BlendPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 300,
                    "waitForCompletion": 0,
                    "opacity": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "D72AEDC3550E974D440B11341E68F0B5B51E",
                "indent": 0
            },
            {
                "id": "vn.BlendBackground",
                "params": {
                    "number": 0,
                    "duration": 300,
                    "waitForCompletion": 0,
                    "opacity": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "2EF4F2238941924D844BA56142EC6056865C",
                "indent": 0
            },
            {
                "id": "vn.UnlockCG",
                "params": {
                    "cgId": "EBD7F0312346874567894CD54B4DE390905B"
                },
                "uid": "C6F5B0F44DB40343F368B718972E88E5DB1B",
                "indent": 0
            },
            {
                "id": "vn.UnlockCG",
                "params": {
                    "cgId": "899676CA9A80504A435A3F74C9C3436771D8"
                },
                "uid": "4A568F6B1ADA914A6398A863B593B6DC89DB",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "AA2BED9F60AF124D9F6A85C752F20ABC6451",
                        "name": "Morning with Tobias"
                    },
                    "savePrevious": 1,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "2A38B07A5273A046634BD510C92815196513",
                "indent": 0
            }
        ],
        "localizableStrings": {
            "6D929B358FE2F64DE76B703101EC5E87B176": {
                "t": "You like music? It usually helps me feel better when things get a bit, uh, chaotic. ",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "91F46F4D262BA8450439648522A46F4CCCF6"
                }
            },
            "3DF431241520F543BF2BEA90463FDB2A930D": {
                "t": "\"I do.\"",
                "d": {
                    "eid": "9888005B792DA14CC019B8361674A1C9F403"
                }
            },
            "118679FA4C0CB745993B64E06EBA3420F8FD": {
                "t": "\"Not really.\"",
                "d": {
                    "eid": "21D85681674B684747690F6199D14501ADE1"
                }
            },
            "F19A0A5505D6744ADF594BF62A413A21253E": {
                "t": "It would be weird if you didn't. I mean, who doesn't like music at all? There's so much variety out there, yknow?",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "E8F2E7827098B24FAD29E6D391BCF6010124"
                }
            },
            "7E601BD03165D444691A0D52AECCDAE18958": {
                "t": "Seriously? There's no music you like? ",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "47908DAC0280D749C21B0464947D8ECCCF76"
                }
            },
            "63D415742B84484BDD6A05E1729C13136A4A": {
                "t": "C'mere, turns out I still have my mp3 player. I want you to listen to some of this. ",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "F66BB0CB8929C446CD78FC426B4D0BEDBF0A"
                }
            },
            "7D761DE683C6104CF179DF82453DD575BE60": {
                "t": "He sits down on the bed, reaching under it to a cooler box and retrieving two bottles of a fizzing, soft pink drink. He puts one in your hands, then slides over to make room for you on the bed. ",
                "d": {
                    "cid": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                    "eid": "BDDE7803927E71480E9BB9636312ACB72E37"
                }
            },
            "83D812626561294D007AE4B41D0231E2391D": {
                "t": "Here, let me put this on...Close your eyes though, you have to appreciate the music.",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "2C23A67E317DF349CD6B7A108B526D808229"
                }
            },
            "B1DF283337BEE0453F2926E46FEBF9D753AB": {
                "t": "He carefully places his headphones on your head.",
                "d": {
                    "cid": 0,
                    "eid": "2D6744983040984D7079FA60F9E8E4DD6370"
                }
            },
            "85C58AA967F9D141617A8E61ABD2F59B56EC": {
                "t": "Is that uncomfortable? No? Okay, I'm gonna play it now, {N:0001}.",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "6808816D876B0142D978F5E5A5B989539EAA"
                }
            },
            "5439C9DF9BA2B747CF7B86C8CB69C0911CBC": {
                "t": "Good, right?",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "A28361040D47F24E501B03711330CE0B00D8"
                }
            },
            "F06D2BDC7C65F34DE68A2B31CABD42542534": {
                "t": "You nod, and as the song ends, he takes the headphones off.",
                "d": {
                    "cid": 0,
                    "eid": "76128AE08B178842D56BC9279834CB0825EB"
                }
            },
            "247E79E121913845A09BA3676CDA60E04C0F": {
                "t": "Sorry. Just, ah, I can't hear the music if you're listening to it. ",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "66D656E47A560149432A6FD053470EDFD88D"
                }
            },
            "5F9E164F80E93346A54BB398F059881A6517": {
                "t": "Uh, if you want to spend the night, where...? I have an extra mattress for the floor, or...",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "072051E407E624468D8B58366F124F2DD4D7"
                }
            },
            "82974A93653C0044D438D499170D4F6D4BD1": {
                "t": "(Sleep on the extra mattress.)",
                "d": {
                    "eid": "5139BF5A9C6CB94E6F283F991FAFB85D23A5"
                }
            },
            "890C7E075709A64E2E3A90A08B43113FB494": {
                "t": "(Ask to sleep in his.)",
                "d": {
                    "eid": "AA5E4992999F884E555A7D37E69E4A18E122"
                }
            },
            "A0A51BC61579E64B825B293043021EF4976E": {
                "t": "Oh, are you sure? Might be a bit of a tight squeeze but I guess I don't have to find where I left the spare blankets....Let me just...",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "A473E8BD81EF3547BF58DAB45397D5624A42"
                }
            },
            "C2E4322B9F99A74E8E1B370320842517204A": {
                "t": "He slides over, leaving just enough space for you to clamber in beside him. Some rustling as the two of you settle in, but you soon find a comfortable position in the small space. Just you, because this man is twisted all over the place trying to be respectful and not touch you in the slightest. ",
                "d": {
                    "cid": 0,
                    "eid": "585469ED15A3B6438A883A15F0DD70CDF39F"
                }
            },
            "C906FEB67506E94ECC8ADB42EFAB4FB6FB87": {
                "t": "It's okay to touch me, Tobias.",
                "d": {
                    "cid": "EC1C8AE072F8A641AA5818181D511081411A",
                    "eid": "D2C8FD859FB6914A15396FA3EB554F1BA124"
                }
            },
            "825993C322008745936A2893F0D9FF62B8C8": {
                "t": "...Ah. If you, if you're sure, {N:0001}. ",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "BB00294C18FC234DC40B8E43B70040289F18"
                }
            },
            "B3C28FBB7CF8924EA43834E4C9D1B14EE791": {
                "t": "He relaxes, letting his arm drape over you. Eventually, his chin rests gently against the top of your head, and your cheek rests against his chest.",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "E6BBC0AD4EE3604389784EC3721865B5311A"
                }
            },
            "E2527D6710C46040CF188A0808C1835972AF": {
                "t": "Alrighty. Let me just go find the, the uh, what is it? Oh yeah, blankets. ",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "ED2333E62DA677405239F7D5D806B2A8F43D"
                }
            },
            "61FFA25603B375469018E0681CF89E16E01C": {
                "t": "Found them. I'll set it out for you, gimme a moment. ",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "0985DE8885B339481B08C3A463EFC38959B3"
                }
            },
            "4EB3052C4D634240FF7919361CECD0BA5473": {
                "t": "He yanks a large, comfortable looking mattress from under the bed, neatly placing a pillow at the head and draping a large fleece blanket over it. He then climbs onto his bed, and gestures out at his work.",
                "d": {
                    "cid": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                    "eid": "57376E3C142D65412B2A13C0869E30E0AB60"
                }
            },
            "2B7D0EC78EA3A84A8239465592CA7319A006": {
                "t": "Voila, it's a bed! ",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "EC8DA2313788D64ACE4B38221A08D0204B9F"
                }
            },
            "FEA842B2227A9446F66826C13522BC1EBD8B": {
                "t": "Thank you, Tobias.",
                "d": {
                    "cid": "EC1C8AE072F8A641AA5818181D511081411A",
                    "eid": "606EAB4E659F9544B038ED68EB07C5ABC501"
                }
            },
            "75C9782E518C154D921BEEF32EC6FB35E231": {
                "t": "...You can call me Tobi, if you want. ",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "273ED1AF83A7314963483788F013AA842640"
                }
            },
            "70EB75127B91F149704AC00757316388C2F3": {
                "t": "...Goodnight, Tobi.",
                "d": {
                    "cid": "EC1C8AE072F8A641AA5818181D511081411A",
                    "eid": "D54E1F3165C1674D7138E2D0283935DAB028"
                }
            },
            "A42B41B857A1534A777B1CA8883703B469BE": {
                "t": "Goodnight.",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "FC20DA02374361470079976470B1908B3E87"
                }
            },
            "DEBB6EED8ADA484EFE2AE7E11DDA58FD8670": {
                "t": "You can call me Tobi, if you want.",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "7E3970D205AC494D0E88DCC73E76BBA483FE"
                }
            },
            "F4B92565342B4941B77837A1D595DD225A73": {
                "t": "You hear him cracking open the lid of his drink bottle, the fizzing sound of the carbonated drink. You decide to do the same. Taking a sip, it tastes like fresh raspberries and a hint of citrus. ",
                "d": {
                    "cid": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                    "eid": "4CBAC6EF3F4C914B7D38A847DB67B46400C2"
                }
            },
            "9804D1936693A04D86091B82EF9554D557B6": {
                "t": "Okay. Thank you for the drink, Tobi.",
                "d": {
                    "cid": "EC1C8AE072F8A641AA5818181D511081411A",
                    "eid": "07BD98A379450548A54ABE973E6CF5D3C5CC"
                }
            },
            "5D8EDF792CD5644F2208B745EAFC4DC31738": {
                "t": "You lie down on your bed, and all you can see of Tobias is his knee jutting off the edge of his bed.",
                "d": {
                    "cid": 0,
                    "eid": "A50B19F27DA8334EE3595E754879CE8702B6"
                }
            },
            "A458AA5B7C484241CF8AC8C21E5DEC52FE01": {
                "t": "Ehh, it's nothing, don't worry about it.",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "5D2EDD9B3827684CD94844759ADF77D34BC2"
                }
            },
            "4AC106D0610A594C01086173097249C37B15": {
                "t": "......",
                "d": {
                    "cid": 0,
                    "eid": "B8A742EE13A28640FC4931117223F2216E28"
                }
            },
            "487EB43C4AAD2543BE3A22C906D4CE1D5537": {
                "t": "Goodnight, {N:0001}.",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "AB3CBD363D71974B788B5211652040E70A4A"
                }
            },
            "0D2A4A886A66F647EA690780E42865F170F1": {
                "t": "Goodnight. ",
                "d": {
                    "cid": "EC1C8AE072F8A641AA5818181D511081411A",
                    "eid": "AA551ED563F4F742816BE6672C8CBA068AA6"
                }
            },
            "C5514EA18BDD934CAA7BAE796FAB61F04C2C": {
                "t": "As the night grows darker, and the sound of waves lapping against the hull of the ship rocks the two of you gently, you fall asleep to the sound of music leaking out of Tobi's headphones...",
                "d": {
                    "cid": 0,
                    "eid": "BAEFB8A23BDD8644D51BBCD8D3EDBD3D5F7B"
                }
            }
        },
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ]
}