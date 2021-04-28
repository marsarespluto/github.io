GS.dataCache['DF144CC4315C054401495EF44D94E33ADA02'] = {
    "uid": "DF144CC4315C054401495EF44D94E33ADA02",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Meet Tobias",
        "type": "vn.scene",
        "parentId": "E55A412405E0974BD929AA400DC8BAACFB49",
        "chapterUid": "02E7B13917F7454FDF78F48668AF4FD24DFF",
        "order": 1,
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "docks",
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
                    "duration": 0,
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
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "F9FBAD908861034CFC2B3E77E64C40DAA383",
                "indent": 0
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "music": {
                        "name": "gamer_time",
                        "volume": "50",
                        "playbackRate": 100
                    },
                    "fadeInDuration": 300,
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
                        "music.volume": 0,
                        "music.playbackRate": 1,
                        "fadeInDuration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "B21B7AC4520BC74FD64985F76DE1A676C36E",
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
                "uid": "812D6F5C60C9B644FF6A937659EB31809F04",
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
                    "duration": 0,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "D3F0161E3098E342413BBB2485A6C479B043",
                "indent": 0
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": true,
                    "id": "messageBox",
                    "visible": 1,
                    "animation": {
                        "type": 0,
                        "movement": 3,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "FA1C987E406C29420F5B22C577966E1CA299",
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
                        "lcId": "0A7F18015A2A87447279BEA5D31FACF6A0D5",
                        "defaultText": "It's quite beautiful out. "
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
                "uid": "911BE0FC584B904668999E33F939CC918CFA",
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
                        "lcId": "8E7C559F83CCA844415964739772B29DA18E",
                        "defaultText": "So is the ocean real, or like, fake? Is it a spirit ocean or something?"
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
                "uid": "A97D64655DE48845438903B15D6191794F66",
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
                        "label": "",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "7BDB833892C1E04E2978CB42115901FFA4B2",
                        "defaultText": "I don't know, honestly. "
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
                "uid": "040D3FF353B2F2409068A0E3F716EB4C88FE",
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
                        "label": "",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "027380C18016404D713BEED5A1B225826E2A",
                        "defaultText": "What even is real, am I right?"
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
                "uid": "5BD5860059E46942B2686BC08248C67330C1",
                "indent": 0
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "uid": "D18453CD6927D94A816AF780F041A5E22FF6",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "A43334F28901094B6A5B10F1CB137F90CC68",
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
                        "lcId": "AA274A2B2BACD6423F4B5E685B39293F106F",
                        "defaultText": "Haha, yeah. Guess that was a stupid question, huh? So what's your name, huh? {N:0001}?"
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
                "uid": "11B7DEAF532203484D4B0734EA113419844F",
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
                        "lcId": "BE2299D33D8F3846026B7E0307D754DA9BFD",
                        "defaultText": "So, you're taking the three of us to Purgatory or something?...Limbo?"
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
                "uid": "67CDED6F1110924A026AD1E47B5BDFD88BCB",
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
                        "lcId": "E1F3500B3FCDF24AD76BD3F5DC2EFE3403D5",
                        "defaultText": "Man, then what religion got it right? The whole concept of an afterlife... Kinda scary. Are we getting re-incarnated or something?"
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
                "uid": "4805104907017440207BC6366C7EDFF430ED",
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
                        "label": "telldeal",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "5CBD54C76A4CA94BD519FE688E3D44A5713D",
                        "defaultText": "(Tell him about the resurrection deal)"
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
                "uid": "105FF2FB366D4148EC28CC05C25617C8BB7F",
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
                        "label": "reincarnate",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": "D5BC39A429A6944D5A5AB1A69C25B00487A2",
                        "defaultText": "Yeah, if you want to be."
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
                "uid": "552AEEF964A4414A5E8884442C805B25A770",
                "indent": 0
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "uid": "B84C847C08569644CB1969A5E69B8678248F",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "telldeal"
                },
                "uid": "CB055437167B3049173AA59634B6A74B0F39",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "688F03E67A19A24D7B293F113AF65A0EAA4E",
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
                        "lcId": "A6E63CC1797614424A3858D74852DBD301F6",
                        "defaultText": "...Well damn. "
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
                "uid": "DD0FCEB348212549F87B4A468B8E8B3B0CD9",
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
                        "lcId": "A402221609EF774EF6793785CA4D4764710E",
                        "defaultText": "Is it like a romantic-only thing or like, between homies?"
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
                "uid": "DAE818308DA012480E2BA810BBBD063D2728",
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
                        "lcId": "EDFC2DA92823244D337B7507E6CBC633CE6C",
                        "defaultText": "*shrug*"
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
                "uid": "D2E9EC8B7112684B2C6A1622A16B679632F4",
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
                        "lcId": "CFE4685F0BA0C84E010B4FD8CD08CC8212AC",
                        "defaultText": "That's wild though. So if I play my cards right, you gonna take me with you or what?"
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
                "uid": "49305CC0787E1346C64B4F483481EF051CB8",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "688F03E67A19A24D7B293F113AF65A0EAA4E",
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
                        "lcId": "2F0FD5FD6ACDA64AFC5A5FB47493B6D3EFBE",
                        "defaultText": "..."
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
                "uid": "188BEBA58050104D665B28F20EF4EA40603F",
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
                        "lcId": "3C14EE284BB3D148726BF5480FCBB9D3A375",
                        "defaultText": "Sorry, was that weird?"
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
                "uid": "FADC01286ADB2143A60AE3A3C6771324B5DB",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "AD3B5FB87759B2465569520753D4065B2705",
                    "parameters": {
                        "values": []
                    }
                },
                "uid": "A280B87885442247E26B720392619AD83BB7",
                "indent": 0
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
                        "lcId": "9BD7DC675B95E440903B67B06A6E56321F95",
                        "defaultText": "Aw, guess that's our cue. "
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
                "uid": "390345BF41AD524A9B4977B82811DBCE3667",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "688F03E67A19A24D7B293F113AF65A0EAA4E",
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
                        "lcId": "4DA3EB3A4D1081457828FB97CA52E3C50BD0",
                        "defaultText": "God, I hate ships. Seasickness..."
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
                "uid": "0961251079B2A54B0D7AB7977044594340E8",
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
                        "lcId": "67D18D031BD4A8409049E161B158EB867A3C",
                        "defaultText": "As the two of you leave, he looks back to the shore one last time before boarding."
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
                "uid": "B5D436824FC7F84A4648030704C442EB3959",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.StopMusic",
                "params": {
                    "layer": 0,
                    "fadeOutDuration": 0,
                    "fieldFlags": {
                        "fadeOutDuration": 1
                    }
                },
                "uid": "3470E3E06B4F764CA898F523818EF82C2493",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "4F24647A00F6994BA7299BF8E1A337E1DC98",
                        "name": "The Ship of Theseus?"
                    },
                    "savePrevious": 1,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "7A1541667A9BA34A5B892EE1D67605C7DD99",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "reincarnate"
                },
                "uid": "9BB493925510564C0F0B7D52127C7AA33FAD",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "A43334F28901094B6A5B10F1CB137F90CC68",
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
                        "lcId": "7B5294F139CCD6469D1932A1A4D5479C9659",
                        "defaultText": "Oh my god, does that mean I can be a dog or something?"
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
                "uid": "91730C3B71FDA64FFD4ACFF813D221DF90A8",
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
                        "lcId": "2B5AC7AD60220647AA6A03698F0C9AF6F930",
                        "defaultText": "Like a golden retriever...That's rad."
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
                "uid": "FAF7552786B454412E38B597669EBA2896D3",
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
                        "lcId": "0A6D3F2266240841AB5B11A477546CDC93DE",
                        "defaultText": "Oh, if you had to pick an animal to reincarnate into, what would you pick?"
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
                "uid": "E916F40C8BDA334F109A1123523328D4ED05",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.InputText",
                "params": {
                    "variable": {
                        "name": "ReinAnimal",
                        "index": 4,
                        "scope": 1,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "letters": 10,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "415637B08EAB034A84187E34CF57DF3F0CC6",
                "indent": 0
            },
            {
                "id": "vn.SetObjectData",
                "params": {
                    "objectType": 4,
                    "number": 0,
                    "numberDomain": "com.degica.vnm.default",
                    "layer": 0,
                    "characterId": "14C1B16B43E098442B38DDE2CEDB7A832FF3",
                    "field": 0,
                    "numberValue": 0,
                    "textValue": {
                        "name": "ReinAnimal",
                        "index": 4,
                        "scope": 1,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "switchValue": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "3D7C41D917CDD84B478B5AF3B5D247084E61",
                "indent": 0
            },
            {
                "id": "gs.ConditionElseIf",
                "params": {
                    "variable": {
                        "name": "ReinAnimal",
                        "index": 4,
                        "scope": 1,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": 0,
                    "textValue": "wolf",
                    "switchValue": 0,
                    "valueType": 2,
                    "operation": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "6F6B96A91473494F8D4AAED848E7F1E0C523",
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
                        "lcId": "00864062164BF64E690ABB27554F9AA97A97",
                        "defaultText": "That's just a dog by another name, in my expert opinion."
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
                "uid": "51A98BEA48AE76498A7AAA48E845F5344C3B",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "thatsadog"
                },
                "uid": "7CACDD7130E1E64D581B2D5087437EE93EAB",
                "indent": 1
            },
            {
                "id": "gs.ConditionElseIf",
                "params": {
                    "variable": {
                        "name": "ReinAnimal",
                        "index": 4,
                        "scope": 1,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": 0,
                    "textValue": "fox",
                    "switchValue": 0,
                    "valueType": 2,
                    "operation": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "6DFE2ED44B13684F3B7A7461C5F3C068F054",
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
                        "lcId": "4740FCB55C51E448716BC77550BB937FAD01",
                        "defaultText": "A fox is like the middle ground between a dog and a cat. Or, like a point-...pointier dog."
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
                "uid": "4F3EAB082ED89147085BD228AC1A3C6941AE",
                "indent": 1,
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "thatsadog"
                },
                "uid": "370E1B06819F7048A63AAAD08BD0962A9764",
                "indent": 1
            },
            {
                "id": "gs.ConditionElse",
                "params": {},
                "uid": "33C1B67C7F0F2241EE89A9545B62247D7920",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "688F03E67A19A24D7B293F113AF65A0EAA4E",
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
                        "lcId": "C279DCF0723BD244184929C744F5513FEE2F",
                        "defaultText": "A {N:0005} huh?"
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
                "uid": "43A6FC9B953B8040056A3B326795820AEFD2",
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
                        "lcId": "5C330875138A33428A18E5B12B75FBA0ED61",
                        "defaultText": "Nice. That's probably my second choice over a dog."
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
                "uid": "94B0C6601F6FF3450A4AA8463F5D303E006B",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "thatsadog"
                },
                "uid": "3328E5754113624904697B61413D80E36FED",
                "indent": 0
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "AD3B5FB87759B2465569520753D4065B2705",
                    "parameters": {
                        "values": []
                    }
                },
                "uid": "3988C5395FE7F840615958823344E3A0AD6D",
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
                        "lcId": "1C2E35667A30B6472E394CF592E317D4E0F1",
                        "defaultText": "Aw, guess that's our cue."
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
                "uid": "B9099666855D284E965BD9534A6EFECF62D5",
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
                        "lcId": "E68BFCF73B2B164C715AE7E5D8FF500EBC65",
                        "defaultText": "A dog, huh? What a weird guy."
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
                "uid": "E1498DB22F145748038848F6C5B0C4283806",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.StopMusic",
                "params": {
                    "layer": 0,
                    "fadeOutDuration": 0,
                    "fieldFlags": {
                        "fadeOutDuration": 0
                    }
                },
                "uid": "3CC03763362AA043FD7B7262D551F34EADE2",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "4F24647A00F6994BA7299BF8E1A337E1DC98",
                        "name": "The Ship of Theseus?"
                    },
                    "savePrevious": 1,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "E29F023936B2884F726B6747CC3FD0F16B62",
                "indent": 0
            }
        ],
        "livePreviewDisabled": false,
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "listVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "localizableStrings": {
            "0A7F18015A2A87447279BEA5D31FACF6A0D5": {
                "t": "It's quite beautiful out. ",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "911BE0FC584B904668999E33F939CC918CFA"
                }
            },
            "8E7C559F83CCA844415964739772B29DA18E": {
                "t": "So is the ocean real, or like, fake? Is it a spirit ocean or something?",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "A97D64655DE48845438903B15D6191794F66"
                }
            },
            "7BDB833892C1E04E2978CB42115901FFA4B2": {
                "t": "I don't know, honestly. ",
                "d": {
                    "eid": "040D3FF353B2F2409068A0E3F716EB4C88FE"
                }
            },
            "027380C18016404D713BEED5A1B225826E2A": {
                "t": "What even is real, am I right?",
                "d": {
                    "eid": "5BD5860059E46942B2686BC08248C67330C1"
                }
            },
            "AA274A2B2BACD6423F4B5E685B39293F106F": {
                "t": "Haha, yeah. Guess that was a stupid question, huh? So what's your name, huh? {N:0001}?",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "11B7DEAF532203484D4B0734EA113419844F"
                }
            },
            "BE2299D33D8F3846026B7E0307D754DA9BFD": {
                "t": "So, you're taking the three of us to Purgatory or something?...Limbo?",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "67CDED6F1110924A026AD1E47B5BDFD88BCB"
                }
            },
            "E1F3500B3FCDF24AD76BD3F5DC2EFE3403D5": {
                "t": "Man, then what religion got it right? The whole concept of an afterlife... Kinda scary. Are we getting re-incarnated or something?",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "4805104907017440207BC6366C7EDFF430ED"
                }
            },
            "5CBD54C76A4CA94BD519FE688E3D44A5713D": {
                "t": "(Tell him about the resurrection deal)",
                "d": {
                    "eid": "105FF2FB366D4148EC28CC05C25617C8BB7F"
                }
            },
            "D5BC39A429A6944D5A5AB1A69C25B00487A2": {
                "t": "Yeah, if you want to be.",
                "d": {
                    "eid": "552AEEF964A4414A5E8884442C805B25A770"
                }
            },
            "A6E63CC1797614424A3858D74852DBD301F6": {
                "t": "...Well damn. ",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "DD0FCEB348212549F87B4A468B8E8B3B0CD9"
                }
            },
            "A402221609EF774EF6793785CA4D4764710E": {
                "t": "Is it like a romantic-only thing or like, between homies?",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "DAE818308DA012480E2BA810BBBD063D2728"
                }
            },
            "EDFC2DA92823244D337B7507E6CBC633CE6C": {
                "t": "*shrug*",
                "d": {
                    "cid": "EC1C8AE072F8A641AA5818181D511081411A",
                    "eid": "D2E9EC8B7112684B2C6A1622A16B679632F4"
                }
            },
            "CFE4685F0BA0C84E010B4FD8CD08CC8212AC": {
                "t": "That's wild though. So if I play my cards right, you gonna take me with you or what?",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "49305CC0787E1346C64B4F483481EF051CB8"
                }
            },
            "2F0FD5FD6ACDA64AFC5A5FB47493B6D3EFBE": {
                "t": "...",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "188BEBA58050104D665B28F20EF4EA40603F"
                }
            },
            "3C14EE284BB3D148726BF5480FCBB9D3A375": {
                "t": "Sorry, was that weird?",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "FADC01286ADB2143A60AE3A3C6771324B5DB"
                }
            },
            "9BD7DC675B95E440903B67B06A6E56321F95": {
                "t": "Aw, guess that's our cue. ",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "390345BF41AD524A9B4977B82811DBCE3667"
                }
            },
            "4DA3EB3A4D1081457828FB97CA52E3C50BD0": {
                "t": "God, I hate ships. Seasickness...",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "0961251079B2A54B0D7AB7977044594340E8"
                }
            },
            "67D18D031BD4A8409049E161B158EB867A3C": {
                "t": "As the two of you leave, he looks back to the shore one last time before boarding.",
                "d": {
                    "cid": 0,
                    "eid": "B5D436824FC7F84A4648030704C442EB3959"
                }
            },
            "7B5294F139CCD6469D1932A1A4D5479C9659": {
                "t": "Oh my god, does that mean I can be a dog or something?",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "91730C3B71FDA64FFD4ACFF813D221DF90A8"
                }
            },
            "2B5AC7AD60220647AA6A03698F0C9AF6F930": {
                "t": "Like a golden retriever...That's rad.",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "FAF7552786B454412E38B597669EBA2896D3"
                }
            },
            "0A6D3F2266240841AB5B11A477546CDC93DE": {
                "t": "Oh, if you had to pick an animal to reincarnate into, what would you pick?",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "E916F40C8BDA334F109A1123523328D4ED05"
                }
            },
            "C279DCF0723BD244184929C744F5513FEE2F": {
                "t": "A {N:0005} huh?",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "43A6FC9B953B8040056A3B326795820AEFD2"
                }
            },
            "5C330875138A33428A18E5B12B75FBA0ED61": {
                "t": "Nice. That's probably my second choice over a dog.",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "94B0C6601F6FF3450A4AA8463F5D303E006B"
                }
            },
            "1C2E35667A30B6472E394CF592E317D4E0F1": {
                "t": "Aw, guess that's our cue.",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "B9099666855D284E965BD9534A6EFECF62D5"
                }
            },
            "E68BFCF73B2B164C715AE7E5D8FF500EBC65": {
                "t": "A dog, huh? What a weird guy.",
                "d": {
                    "cid": "BA77A09EK7F14A4C2BSA11BE8CC099F00810",
                    "eid": "E1498DB22F145748038848F6C5B0C4283806"
                }
            },
            "00864062164BF64E690ABB27554F9AA97A97": {
                "t": "That's just a dog by another name, in my expert opinion.",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "51A98BEA48AE76498A7AAA48E845F5344C3B"
                }
            },
            "4740FCB55C51E448716BC77550BB937FAD01": {
                "t": "A fox is like the middle ground between a dog and a cat. Or, like a point-...pointier dog.",
                "d": {
                    "cid": "EBC0771624CC014F753B1CF397B07A8B6100",
                    "eid": "4F3EAB082ED89147085BD228AC1A3C6941AE"
                }
            }
        },
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